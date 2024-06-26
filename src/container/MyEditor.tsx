import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react";
Quill.register("modules/imageResize", ImageResize);

const modules = {
  toolbar: {
    container: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline"],
      ["image", "video"], // 툴바에 동영상 버튼 추가
      ["clean"],
    ],
  },
  imageResize: {
    // Optional configuration
    modules: ["Resize", "DisplaySize", "Toolbar"],
  },
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "list",
  "bold",
  "italic",
  "underline",
  "image",
  "video",
];

const MyEditor: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <div style={{ width: "50vw" }}>
      <ReactQuill
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
        theme="snow"
      />
    </div>
  );
};

export default MyEditor;
