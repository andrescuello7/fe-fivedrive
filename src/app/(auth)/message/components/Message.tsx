"use client";
import styles from "./message.module.css";

const Message = () => {
  return (
    <div className={styles.body}>
      <div className={styles.main}>
        <div className={styles.boxBar}>
          <div className={styles.barOptions}>
            <p>Chats</p>
            <b>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </b>
          </div>
          <div className={styles.barChats}>
            <div className={styles.chat}>
              <div className={styles.chatImg}></div>
              <div className={styles.chatBody}>
                <div>Leslie Laurence</div>
                <span className={styles.timestamp}>You: UX UI</span>
              </div>
            </div>
            <div className={styles.chat}>
              <div className={styles.chatImg}></div>
              <div className={styles.chatBody}>
                <div>Laura Snake</div>
                <span className={styles.timestamp}>It is my moment</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.boxMessage}>
          <div className={styles.message}>
            <div className={styles.boxMessages} id="messages"></div>
            <div className={styles.boxInput}>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-paperclip"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"
                  />
                </svg>
              </button>
              <input type="text" placeholder="message..." id="input" />
              <button id="send">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-send-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
