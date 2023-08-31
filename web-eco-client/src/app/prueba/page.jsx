

export default function Plans() {
  return (
    <div className='flex flex-col bg-red-500 mx-2 mt-20'>
      <h2>Lemu</h2>
      <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque molestiae at eaque quo ea</h4>
      <iframe
        width={0}
        height={0}
        src='https://www.youtube.com/embed/eZsUA23VXfw?si=8NJnjSp-2v2zsIWx'
        title={`YouTube video: Lemu`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}