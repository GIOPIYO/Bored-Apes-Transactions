import React from 'react';
import  Card  from './ui/Card';
import { Hexagon } from 'lucide-react'

const NFTCard = ({  blockNumber,transactionHash, from, to }) => {
  return (
    <Card className="w-64 bg-gray-900 text-white overflow-hidden">
      <div className="h-64 bg-gray-800 flex items-center justify-center">
        <Hexagon size={100} className="text-gray-600" />
      </div>
      <div className="p-4">
        <div className="text-xl"> BlockNumber:{blockNumber}</div>
        <div className="text-sm text-gray-300 overflow-hidden text-ellipsis whitespace-nowrap">Transaction hash:{transactionHash}</div>
        <div className="text-sm text-gray-300 overflow-hidden text-ellipsis whitespace-nowrap"> From: {from}</div>
        <div className="text-sm text-gray-300 overflow-hidden text-ellipsis whitespace-nowrap"> To: {to} </div>

      </div>
    </Card>
  )
}

const NFTGallery = ({ nfts }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {nfts.map((nft) => (
        <NFTCard 
          key={nft.id}
          blockNumber={nft.blockNumber}
          transactionHash={nft.transactionHash}
          from={nft.from}
          to={nft.to}
        />
      ))}
    </div>
  )
}

export default NFTGallery