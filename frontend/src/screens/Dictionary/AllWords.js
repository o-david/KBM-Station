import React, { useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";

import { useDispatch, useSelector } from "react-redux";
import { allWords } from "../../actions/wordActions";
import "./LandingPage.css";
import { TbSend } from "react-icons/tb";

const AllWords = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allWords());
  }, [dispatch]);

  const Words_all = useSelector((state) => state.wordList);
  const { error, loading, groupedWords } = Words_all;

  console.log(groupedWords);
  return (
    <div className="allwords">
      <div className="discuss">
      <span className="letter-select ">
        Join the discussion <TbSend />
      </span>
      </div>

      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      {groupedWords &&
        Object.entries(groupedWords).map(([letter, words]) => (
          <div className="word-grp" key={letter}>
            <span className="letter">{letter}.</span>
            {console.log(words)}
            <div className="words">
              {words.map(({ word, meaning }) => (
                <div key={word} className="ind-word">
                  <span className="word">{word}</span>
                  <span className="meaning">{meaning}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default AllWords;
