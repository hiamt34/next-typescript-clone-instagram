import React, { useEffect, useState } from "react"
import dynamic from 'next/dynamic'

const Picker = dynamic(() => import('emoji-picker-react'), { ssr: false })

interface Props {
  setCmt: Function
  cmt: String
}

export const ListEmoji = ({ setCmt, cmt } : Props) => {

  const onEmojiClick = (event:any, emojiObject:any) => {
    setCmt(cmt + emojiObject.emoji)
  };

 
  return (
    <div>
      <Picker
        onEmojiClick={onEmojiClick}
        disableAutoFocus={true}
        disableSearchBar={true}
        disableSkinTonePicker	={true}
        groupNames={{ smileys_people: "PEOPLE" }}
        groupVisibility={{
          flags: false,
        }}
        native
        pickerStyle={{ 
          position: 'absolute',
          bottom: '50px',
          left: '4px',
          width: '60%'
        }}
      />
    </div>
  );
};