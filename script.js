const titleEle = document.getElementById('title');
const singerEle = document.getElementById('singer');
const toneELe = document.getElementById('tone');
const textareaELe = document.querySelector('.app .form textarea');

axios.defaults.baseURL = 'https://lyric-slide-creator-api.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:3333';

async function handleCreateSlide() {
  const title = titleEle.value;
  const singer = singerEle.value;
  const tone = toneELe.value;
  const lyrics = textareaELe.value;

  const aEle = document.querySelector('.app .form a');

  if (!title || !lyrics || !tone || !singer) return alert('Preencha todos os campos');

  try {
    const res = await axios.post('/slide', { title, singer, tone, lyrics });
    aEle.href = res.data.url;
    aEle.style.display = 'block';
    aEle.onclick = () => {
      setTimeout(() => {
        aEle.style.display = 'none';
      }, 1000);
    }
  } catch (err) {
    alert('Algo deu errado, tente novamente!');
  }
}