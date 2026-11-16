import react from 'react';
import reactDOM from 'react-dom/client';




const heading = react.createElement('h1', {id: 'heading'}, 'Hello, World!');
const jsxHeading = (<><h1 id="jsx-heading">Hello, World! from JSX</h1>
<img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-4kDkhFzV2hMi0zbj9k-T7tB_kXDYwZHuhUQw0WxUruKLG11p"
  alt="Amarendra Baahubali"
/></>);


const Title = ()=> (<><h1 id="jsx-heading">Hello, World! from JSX</h1>
<img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-4kDkhFzV2hMi0zbj9k-T7tB_kXDYwZHuhUQw0WxUruKLG11p"
  alt="Amarendra Baahubali"
/></>);

const HeadingComponent = () => {
    return (
        <div>
            <Title/>
            <h1 id="jsx-heading">Hello, World! from functional component</h1>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-4kDkhFzV2hMi0zbj9k-T7tB_kXDYwZHuhUQw0WxUruKLG11p"
                alt="Amarendra Baahubali"
            />
        </div>
    );
};

console.log(jsxHeading);
const root = reactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>);    