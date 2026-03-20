import { useState } from 'react';
import '../styles/LikeButton.css'; 

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="like-container">
      <button 
        onClick={() => setLiked(!liked)}
        className={liked ? 'like-button liked' : 'like-button'}
      >
        {liked ? '❤️ Tack för din like!' : '👍 Gilla vår anläggning'}
      </button>
    </div>
  );
}

export default LikeButton;