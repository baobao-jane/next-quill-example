"use client";

import { FC } from "react";

type Props = {
  block: string;
};

const HtmlPreviewBox: FC<Props> = ({ block }) => {
  return (
    <div>
      {typeof window ? (
        <div dangerouslySetInnerHTML={{ __html: block }} />
      ) : (
        <div />
      )}
    </div>
  );
};

export default HtmlPreviewBox;
