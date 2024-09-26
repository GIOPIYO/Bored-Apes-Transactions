import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import NFTGallery from './NFTGallery';

const MyQuery = gql`
  query MyQuery($first: Int!, $skip: Int!) {  
    transferSingles(first: $first, skip: $skip) {
      blockNumber
      transactionHash
      from
      to
      id
    }
  }
`;

function App() {
  const [page, setPage] = useState(0);  // Changed initial page to 0
  const nftsPerPage = 20;

  const { loading, error, data, fetchMore } = useQuery(MyQuery, {
    variables: { first: nftsPerPage, skip: 0 },  // Set initial skip to 0
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const loadMore = () => {
    fetchMore({
      variables: {
        first: nftsPerPage,
        skip: (page + 1) * nftsPerPage,  // Calculate skip based on the next page
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          ...prev,
          transferSingles: [
            ...prev.transferSingles,
            ...fetchMoreResult.transferSingles,
          ],
        };
      },
    });
    setPage(page + 1);
  };

  return (
    <div className="bg-gray-500 min-h-screen p-4">
      {/* Heading at the Top */}
      <header className="text-center mb-8">
        <h1 className="text-4xl text-white font-bold">Bored Ape NFT Transactions</h1>
        <p className="text-lg text-gray-400">View recent Bored Ape Yacht Club transactions</p>
      </header>

      {/* NFT Gallery Component */}
      <div className="max-w-6xl mx-auto">
        <NFTGallery nfts={data?.transferSingles} />

        {/* Load More Button */}
        {data?.transferSingles?.length % nftsPerPage === 0 && (
          <div className="text-center mt-4">
            <button
              onClick={loadMore}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
