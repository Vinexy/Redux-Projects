import React, { useEffect } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";

const Score = ({ modalIsOpen, handleRestart }) => {
  const score = useSelector((state) => state.words);
  return (
    <div>
      {modalIsOpen && (
        <Modal
          ariaHideApp={false}
          isOpen={modalIsOpen}
          onRequestClose={handleRestart}
          style={{
            content: {
              backgroundColor: "#BCDDFE",
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              width: "32%",
            },
          }}
          contentLabel="Example Modal"
        >
          <div className="top-container">
            <span className="result-text">Result </span>
            <span className="screenshot-text">Screenshot </span>
          </div>
          <div className="dks-container">
            <div className="dks">{score.trueWordCount} DKS </div>
            <div className="can-write-text">(can write)</div>
          </div>
          <div className="bottom-container">
            <span className="hit-word">Hit Time </span>
            <span className="right-part">
              <span> (</span>
              <span className="true-hit">{score.trueHit} </span> |
              <span className="wrong-hit"> {score.wrongHit}</span>
              <span>) </span>
              <span className="total-hit">
                {score.trueHit + score.wrongHit}
              </span>
            </span>
          </div>
          <div className="bottom-container bg-gray">
            <span className="hit-word">Accuracy </span>
            <span className="right-part">
              {(
                (100 * score.trueHit) /
                (score.wrongHit + score.trueHit)
              ).toFixed(2)}
              %
            </span>
          </div>
          <div className="bottom-container">
            <span className="hit-word">True words </span>
            <span className="right-part text-green">{score.trueWordCount}</span>
          </div>
          <div className="bottom-container bg-gray">
            <span className="hit-word">Wrong words </span>
            <span className="right-part text-red">{score.wrongWordCount}</span>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Score;
