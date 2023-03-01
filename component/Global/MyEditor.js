import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { useDispatch } from 'react-redux';

const MyEditor = (props) => {
  const { row } = props;
  const dispatch = useDispatch();
  // const { currentValue } = props;
  const [value, setValue] = useState('');

  useEffect(() => {
    if (row.key) setValue(row?.description);
    else setValue('');
  }, [row]);
  // console.log('row myeditor', value);
  // const formats = [
  //   'font',
  //   'size',
  //   'bold',
  //   'italic',
  //   'underline',
  //   'strike',
  //   'color',
  //   'background',
  //   'script',
  //   'header',
  //   'blockquote',
  //   'code-block',
  //   'indent',
  //   'list',
  //   'direction',
  //   'align',
  //   'link',
  //   'image',
  //   'video',
  //   'formula',
  // ];

  const handleChange = (html) => {
    dispatch({
      type: 'editor/changeEditor',
      payload: { value: html },
    });
    setValue(html);
  };
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={handleChange}
      // formats={formats}
      // placeholder="Giới thiệu sân bóng"
      // defaultValue={currentValue}
    />
  );
};

export default MyEditor;
