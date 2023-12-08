"use client";
import dynamic from "next/dynamic";
import { FC, useState } from "react";
import { BlockCreateReq } from "src/types/block-type";
import HtmlPreviewBox from "./html-preview-box";

const QuillEditor = dynamic(() => import("src/components/quill-editor"), {
  ssr: false,
});

type Props = {
  handleChange: (block: BlockCreateReq) => void;
  block: BlockCreateReq;
};

const HtmlBlock: FC<Props> = ({ handleChange, block }) => {
  const [open, setOpen] = useState(false);
  const handleContent = (content: string) => {
    console.log("]-----] HtmlBlock::handleContent [-----[", content);
    handleChange({
      ...block,
      content: content,
    });
  };
  return (
    <div>
      <QuillEditor handleChange={handleContent} value={block.content} />
      <div style={{ textAlign: "right" }}>
        <button
          onClick={() => setOpen(!open)}
          style={{ width: 100, height: 40, marginTop: 20 }}
        >
          Preview
        </button>
      </div>
      {open && (
        <div>
          <HtmlPreviewBox block={block.content} />
        </div>
      )}
    </div>
  );
};

export default HtmlBlock;
