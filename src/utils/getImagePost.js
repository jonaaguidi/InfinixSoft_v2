export const getImagePost = (imageId) => {
    const ImageMap = {
      // Agrega más ID y URL de Imagenes de ser necesario.
      "6rUpDaslBMQC3i0SbDkHC9" : "//images.ctfassets.net/nz4tj25d223o/6rUpDaslBMQC3i0SbDkHC9/c38dabbe794d02bf8ab7ef4a7c79ed6f/Infinixdubai.png",
      "3MVlw7Niv3PcYkrxfuAQ9L" : "//images.ctfassets.net/nz4tj25d223o/3MVlw7Niv3PcYkrxfuAQ9L/cb029c86b0d8d7179007f1c0ec9018b5/dubai.jpg",
    };

    // Si no esta el ID, me devuelve "..."
    return ImageMap[imageId] || "https://infinixsoft.com/OG-IMAGE-SOFT.webp";
  };