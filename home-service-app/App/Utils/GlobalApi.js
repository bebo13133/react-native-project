import { gql, request } from 'graphql-request'
MASTER_URL = "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/cm0b8xgb1097w07uo9plih65h/master"

const GetSlider= async()=>{
    const document = gql`
 query GetSlider {
  sliders {
    id
    name
    image {
      url
    }
  }
}
  `
 const result=  await request(MASTER_URL, query)
 return result
}
