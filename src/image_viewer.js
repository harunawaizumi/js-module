import small from '../assets/small.png'


export default () => {
    const image = document.createElement('img')
    image.src = small;
    document.body.appendChild(image);
}
