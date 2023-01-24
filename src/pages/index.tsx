import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$green300',
  borderRadius: 8,
  outline: 0,
  border: 0,
  padding: '4px 8px',

  span: {
    fontWeight: 'bold',
  },

  '&:hover': {
    cursor: 'pointer',
  }
})

export default function Home() {
  return (
    <>
      <Button>
        <span>Teste</span>
        Hello world
      </Button>
    </>
  )
}
