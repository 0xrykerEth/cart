import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 10,
    title: 'Wireless Mouse',
    description: 'A smooth and responsive wireless mouse',
  },
  {
    id: 'p2',
    price: 25,
    title: 'Mechanical Keyboard',
    description: 'A durable keyboard with tactile switches',
  },
  {
    id: 'p3',
    price: 15,
    title: 'USB-C Hub',
    description: 'Expand your laptop connectivity with ease',
  },
  {
    id: 'p4',
    price: 40,
    title: 'Bluetooth Speaker',
    description: 'Portable speaker with crystal clear sound',
  },
  {
    id: 'p5',
    price: 20,
    title: 'Webcam',
    description: 'HD webcam for video calls and streaming',
  },
  {
    id: 'p6',
    price: 8,
    title: 'Notebook',
    description: 'A ruled notebook for daily notes',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
          id= {product.id}
          key={product.id}
          title={product.title}
          price= {product.price}
          description= {product.description}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
