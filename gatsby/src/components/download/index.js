import React from "react"
import './style.css';

const Download = ({ file }) => {
  const downloadPath = `https://raw.githubusercontent.com/pantheon-systems/documentation/master/source/scripts/${file}`
  return (
    <div
      className="script-file-header"
    >
      {file}
      <a href={downloadPath}
        download
        download={file}
        target="_blank"
      >
        <button
          className="btn btn-default btn-download"
        >
          <i
            className="fa fa-code"
            aria-hidden="true"
          >
          </i>
          &nbsp; View Raw
        </button>
      </a>
    </div>
  )
}

export default Download
