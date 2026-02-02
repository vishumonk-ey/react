import { useEffect, useState , useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoForm from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
const YOUTUBE_VIDEO_ID = '_vTrBw97QWE'
function App() {
  // const todos = useSelector((state) => {
  //   // console.log(state.todos);
  //   return state.todos;
  // });
  // console.log(todos);

  const [nhiKiya, setnhiKiya] = useState(false);
  const [maafKiya, setMaafKiya] = useState(false);
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const hasUnmutedRef = useRef(false);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    const onYouTubeIframeAPIReady = () => {
      if (!document.getElementById("youtube-player")) return;
      playerRef.current = new window.YT.Player("youtube-player", {
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: YOUTUBE_VIDEO_ID,
        },
        events: {},
      });
    };

    if (window.YT && window.YT.Player) {
      onYouTubeIframeAPIReady();
    } else {
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }
    return () => {
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  const unmuteAndPlay = () => {
    if (hasUnmutedRef.current || !playerRef.current?.unMute) return;
    hasUnmutedRef.current = true;
    playerRef.current.unMute();
    playerRef.current.setVolume(100);
  };

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);
  return (
    // <>
    //   <Navbar />
    //   <TodoForm />
    //   <TodoList />
    // </>
    <div
      className="flex items-center justify-center w-full min-h-screen bg-[url('https://images.unsplash.com/photo-1649361975581-ca460ed3f925?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-top p-4"
      onClick={unmuteAndPlay}
    >
      <div className="max-w-xl rounded-sm py-6 px-10 bg-[#FCE7F3] text-red-400 font-semibold flex flex-col items-center space-y-5">
        <h1 className="text-3xl">I am really sorry , Pomu !🥹</h1>
        {!maafKiya && (
          <h2 className="text-xl">
            {nhiKiya ? "Pleaseeeee pomuuu darling 😣" : "maaf kiya mujhe ? "}
          </h2>
        )}

        {!maafKiya && (
          <div className="flex items-center space-x-4">
            <button
              className="w-fit px-3 py-1 rounded-sm bg-white"
              onClick={() => setMaafKiya(true)}
            >
              Haan kiya
            </button>
            {!nhiKiya && (
              <button
                className="w-fit px-3 py-1 rounded-sm bg-white"
                onClick={() => setnhiKiya(true)}
              >
                Nahi kiya{" "}
              </button>
            )}
            {nhiKiya && (
              <button
                className="w-fit px-3 py-1 rounded-sm bg-white"
                onClick={() => setMaafKiya(true)}
              >
                kardiya maaf mere bandar
              </button>
            )}
          </div>
        )}
        {maafKiya && (
          <div className="text-lg text-[#615FFF] duration-300 ease-in-out space-y-3">
            <img
              src="https://images.unsplash.com/photo-1615966650071-855b15f29ad1?q=80&w=1266&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-40 h-40 rounded-sm object-cover object-right"
            />
            <p>
              Yayyyyy , meri sona . Pata hi tha meri sona mujhse naraaz nhi reh
              skti . <br />
              Gussa nhi karunga apni sona pr ab , itni pyaari ladki hai . Aur tb
              bhi apne aap ko hi ganda bolte rehti hai , aur ek aur baat pomu ..
              Bhot acche insaan ho aap , apne aap ko ganda mt bola kro !
              <br /> You are very beautiful person by heart , by nature , by
              beauty ! 💖
              <br />{" "}
              <span className="font-semibold text-[#193CB8]">
                Love youuuu my <span className="italic ">lipuuu</span>{" "}
                kuchupuchuu !
              </span>
            </p>
          </div>
        )}
      </div>
      <div ref={containerRef} className="fixed bottom-4 right-4">
        <div id="youtube-player" style={{ width: 110, height: 110 }} />
      </div>
    </div>
  );
}

export default App;
