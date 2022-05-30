import React, { useEffect, useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import { useWeb3 } from '@3rdweb/hooks'
import { client } from '../../lib/sanityClient'
import { ThirdwebSDK } from '@3rdweb/sdk'
import NFTCard from '../../components/main/NFTCard'

const Collection = () => {
    const router = useRouter()
    const { provider } = useWeb3()
    const { collectionId } = router.query
    const [collection, setCollection] = useState({})
    const [nfts, setNfts] = useState([])
    const [listings, setListings] = useState([])
  
    const nftModule = useMemo(() => {
      if (!provider) return
  
        const sdk = new ThirdwebSDK(
        provider.getSigner(),
        'https://eth-rinkeby.alchemyapi.io/v2/kdtJFA-X2y_CpxjNXwcOYaqxrUYtODeW'
      )
      
      return sdk.getNFTModule('0x4f66bc2887fAF31f1d6ec9026F3E54e89A2e7Fa6')
    }, [provider])
  
    // get all NFTs in the collection
    useEffect(() => {
      if (!nftModule) return
      ;(async () => {
        const nfts = await nftModule.getAll()
  
        setNfts(nfts)
      })()
    }, [nftModule])
  
    const marketPlaceModule = useMemo(() => {
      if (!provider) return
  
      const sdk = new ThirdwebSDK(
        provider.getSigner(),
        'https://eth-rinkeby.alchemyapi.io/v2/kdtJFA-X2y_CpxjNXwcOYaqxrUYtODeW'
      )
      return sdk.getMarketplaceModule(
        '0xF766d4a2d53e2759F9d63C8f5BCA3AD6e3eD6DD4'
      )
    }, [provider])
  
    // get all listings in the collection
    useEffect(() => {
      if (!marketPlaceModule) return
      ;(async () => {
        setListings(await marketPlaceModule.getAllListings())
      })()
    }, [marketPlaceModule])
  
    const fetchCollectionData = async (sanityClient = client) => {
      const query = `*[_type == "marketItems" && contractAddress == "0x4f66bc2887fAF31f1d6ec9026F3E54e89A2e7Fa6" ] {
        "imageUrl": profileImage.asset->url,
        "bannerImageUrl": bannerImage.asset->url,
        volumeTraded,
        createdBy,
        contractAddress,
        "creator": createdBy->userName,
        title, floorPrice,
        "allOwners": owners[]->,
        description
      }`
  
      const collectionData = await sanityClient.fetch(query)
  
      // the query returns 1 object inside of an array
      await setCollection(collectionData[0])
    }
  
    useEffect(() => {
      fetchCollectionData()
    }, [collectionId])
    
  return (
    <>
      <div className='border-2 border-purple-600 text-white'>
        {collection.floorPrice}
      </div>
      {nfts.map((nftItem, id) => (
        <NFTCard
        key={id}
        nftItem={nftItem}
        title={collection.title}
        listings={listings}
         />
      ))}
    </>
  )
  
}

export default Collection