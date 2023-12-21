import Card from '@components/react/Card.jsx';
import useFirestore from '@hooks/useFirestore';

const ImageGrid = () => {
  const {docs} = useFirestore("images");

  return (
    <section className="h-max mx-auto mt-20">
      <ul className="grid grid-cols-3 gap-2">
        {docs && docs.map(doc => (
          <Card doc={doc} key={doc.id}/>
        ))}
      </ul>
    </section>
  )
}

export default ImageGrid