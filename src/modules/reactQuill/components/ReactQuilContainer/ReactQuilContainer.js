import 'react-quill/dist/quill.snow.css';
import React from 'react'
import ReactQuill from 'react-quill';

const modules = {
  toolbar: [
    ['bold', 'italic'],
    [{ color: [] }],
    ['link', 'blockquote', 'code', 'image'],
    [
      {
        list: 'ordered',
      },
      {
        list: 'bullet',
      },
    ],
  ],
};

const ReactQuilContainer = () => {
  return (
    <div>
      <ReactQuill
        modules={modules}
        />
    </div>
  )
}

ReactQuilContainer.propTypes = {

}

export default ReactQuilContainer
