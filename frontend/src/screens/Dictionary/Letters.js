import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allWords } from "../../actions/wordActions";
import "./LandingPage.css";
import { Link, useParams } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { TbSend } from "react-icons/tb";
const Letters = () => {
  const dispatch = useDispatch();
  //   const [noWord, setnoWord] = useState(false);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    dispatch(allWords({ letter: id }));
  }, [dispatch, id]);

  const Words_all = useSelector((state) => state.wordList);
  const { words } = Words_all;

  return (
    <div className="allwords">
      <div id="letter-bar">
        <span className="letter-select">
          {id}
          <Link
            style={{ textDecoration: "none", color: "#1A181C" }}
            to={`/dictionary`}
          >
            <span>
              <IoIosClose />
            </span>
          </Link>
        </span>
        <span id="total-words">
          showing {words && words.filter((ind) => ind.word[0] === id).length} of{" "}
          {words && words.length}
        </span>
      </div>
      <div className="discuss">
      <span className="letter-select ">
        Join the discussion <TbSend />
      </span>
      </div>
      <div className="word-grp">
        <span className="letter">{id}.</span>
        {words &&
          words
            .filter((ind) => ind.word[0] === id)
            .map((ind) => {
              return (
                <div className="words">
                  <div key={ind._id} className="ind-word">
                    <span className="word">{ind.word}</span>
                    <span className="meaning">{ind.meaning}</span>
                  </div>
                </div>
              );
            })}

        {/* {noWord && <span>There are no Words for this letter</span>} */}
      </div>
    </div>
  );
};

export default Letters;
