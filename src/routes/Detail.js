import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Detail(props) {
  let [alert, setAlert] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (data) {
    return data.id == id;
  });

  return (
    <div className='container'>
      {/* 저 alert가 true인 상태 -> 타임아웃이 2초가 되면 -> false로 변경해주세요 */}
      {alert == true ? (
        <div className='alert alert-warning'>2초이내 구매시 할인</div>
      ) : null}
      <div className='row'>
        <div className='col-md-6'>
          <img
            src='https://codingapple1.github.io/shop/shoes1.jpg'
            width='100%'
          />
        </div>
        <div className='col-md-6 mt-4'>
          <h4 className='pt-5'>{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className='btn btn-danger'>주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
