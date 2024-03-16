import GameGallery from "../game-gallery/GameGallery";


export default function GameRow({
    game = {}
}) {
  return (
    <li className="game-row">
        <span className="game-list">{game.name}</span>
        {game.inWishList && <span className="game-in-whish-list">В желаемом</span>}
        <GameGallery images={game.images} />
        <span className="game-price">{ game.price }</span>
    </li>
  )
}
