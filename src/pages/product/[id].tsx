import { ImageContainer, ProductContainer, ProductDetails } from '@/src/styles/pages/product';
import { useRouter } from 'next/router';

export default function Product() {
    const { query } = useRouter();

    return (
        <ProductContainer>
            <ImageContainer>
                
            </ImageContainer>
            <ProductDetails>
                <h1>Camiseta x</h1>
                <span>R$ 79,99</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim sapiente deserunt, accusantium ut dicta similique.</p>

                <button>Comprar agora</button>

            </ProductDetails>
        </ProductContainer>
    )
}