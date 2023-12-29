import { useParams } from 'react-router-dom';
import { Spinner } from "../components/spinner.tsx";

function PageNestedDemo () {
  const name = useParams()['name'];

  return (
    <>
      <h1>Nested demo page</h1>

      <p>Url param :name value is "{name}"</p>

      <Spinner />
    </>
  );
}

export default PageNestedDemo;