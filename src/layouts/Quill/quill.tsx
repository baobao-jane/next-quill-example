"use client";
import { useState } from "react";
import HtmlBlock from "src/components/html-block";
import { BlockCreateReq } from "src/types/block-type";

export default function Quill() {
  const [block, setBlock] = useState<BlockCreateReq>({ content: "" });
  const handleChange = (block: BlockCreateReq) => {
    setBlock(block);
  };
  return (
    <div>
      <HtmlBlock handleChange={handleChange} block={block} />
    </div>
  );
}
