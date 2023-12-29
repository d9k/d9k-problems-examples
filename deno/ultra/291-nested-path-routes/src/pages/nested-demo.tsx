import { useParams } from 'react-router-dom';

function PageNestedDemo () {
  const name = useParams()['name'];

  return (
    <>
      <h1>Nested demo page</h1>

      <p>Url param :name value is "{name}"</p>
    </>
  );
}

export default PageNestedDemo;