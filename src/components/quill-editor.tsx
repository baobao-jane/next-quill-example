"use client";
import { FC, useRef, useMemo } from "react";
import ReactQuill, { Quill, UnprivilegedEditor } from "react-quill";
import "react-quill/dist/quill.snow.css";

const BlockEmbed = Quill.import("blots/block/embed");

type Props = {
  handleChange: (content: string) => void;
  value: string;
};

class DividerBlot extends BlockEmbed {
  static blotName: string;
  static tagName: string;
}
DividerBlot.blotName = "divider";
DividerBlot.tagName = "hr";

const fontSizeArr = [
  "12px",
  "14px",
  "16px",
  "18px",
  "20px",
  "22px",
  "24px",
  "26px",
  "28px",
  "30px",
  "32px",
  "42px",
  "54px",
  "68px",
  "84px",
  "98px",
];

var Size = Quill.import("attributors/style/size");
Size.whitelist = fontSizeArr;
Quill.register(Size, true);
Quill.register(DividerBlot);

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "divider",
  "align",
];

const QuillEditor: FC<Props> = ({ handleChange, value }: Props) => {
  const quillRef = useRef<ReactQuill>(null);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ size: fontSizeArr }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ color: [] }, { background: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
          ["link", "image", "video"],
          ["clean"],
        ],
        // handlers: {
        //   image: imageHandler,
        // },
        clipboard: {
          matchVisual: false,
        },
      },
    }),
    []
  );

  const handleContent = (
    content: string,
    delta: any,
    source: any,
    editor: UnprivilegedEditor
  ) => {
    console.log("]-----] QuillEditor::handleContent.content [-----[", content);
    console.log(
      "]-----] QuillEditor::handleContent.getHTML [-----[",
      editor.getHTML()
    );
    handleChange(editor.getHTML());
  };

  return (
    <div style={{ marginTop: 30 }}>
      <ReactQuill
        modules={modules}
        formats={formats}
        theme="snow"
        onChange={handleContent}
        value={value}
        ref={quillRef}
      />
    </div>
  );
};

export default QuillEditor;
