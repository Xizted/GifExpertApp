const getGifs = async (category) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
    )}&limit=10&api_key=mtEfsLdVFQcQIBKZHyNdWi37mnaXhepB`
  );
  const { data } = await response.json();

  const gifs = data.map(({ id, title, images }) => ({
    id,
    title,
    url: images.downsized_medium.url,
  }));
  return gifs;
};

export default getGifs;
