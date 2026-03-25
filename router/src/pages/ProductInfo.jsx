import { useParams } from "react-router-dom"

const ProductInfo = () => {
    //URL 파라미터에서 id 값을 추출
    const { id } = useParams()

    return(
        <section className="product-info">
            <h1>상품 정보</h1>
            <p>상품 ID: {id}</p>
        </section>
    )
}

export default ProductInfo