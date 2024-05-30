/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

let NFT_list = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT (NFTname, NFTtype, NFTprice, NFTvolume, NFTfloorPrice) {
  let NFTobj = {
    NFT_Name: NFTname,
    NFT_Type: NFTtype,
    NFT_Price: NFTprice,
    NFT_Volume: NFTvolume,
    NFT_FloorPrice: NFTfloorPrice
  };

  // Adding the object into NFT_list:
  NFT_list.push(NFTobj);
}

// create a "loop" that will go through an "array
// and print their metadata with console.log()

function listNFTs () {
  console.log("Here is the Stats of " + NFT_list.length + " NFT");
  console.log("=========================================================================");
  for(i=0; i < NFT_list.length; i++) {

    console.log("Name: " + NFT_list[i].NFT_Name);
    console.log("Type: " + NFT_list[i].NFT_Type);
    console.log("Price: " + NFT_list[i].NFT_Price);
    console.log("Volume: " + NFT_list[i].NFT_Volume);
    console.log("FloorPrice: " + NFT_list[i].NFT_FloorPrice);
    console.log("-----------------------------------------------")
    console.log("\n")
  }
}

// print the total number of NFTs we have minted to the console

function getTotalSupply() {
  console.log("There are currently " + NFT_list.length + " NFT's in supply.")
}

// call your functions below this line

  // Creating NFT
mintNFT('Boomboom', 'Sport', '34 ETH', '567 ETH', '2 ETH');
mintNFT('Chronoforge', 'Gaming', '67 ETH', '789 ETH', '5 ETH');
mintNFT('Delectables', 'Art', '4 ETH', '51 ETH', '0.02 ETH');
mintNFT('Interwoven', 'Art', '78 ETH', '126 ETH', '1.60 ETH');

 // Printing the NFT's
listNFTs();

 // Printing the total Supply of NFT's
 getTotalSupply();
