import Single from '../../components/single/Single';
import { singleProduct } from '../../data';
import './product.scss';

export default function Product() {
  //fetch data and send to single product
  return (
    <div className='product'>
      <Single {...singleProduct} />
    </div>
  );
}
