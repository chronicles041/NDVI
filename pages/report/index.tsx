import React, { useState, useRef, useEffect } from "react";

const Report: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [messages, setMessages] = useState<{ sender: string; text: string; image?: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Define static predefined diseases
  const diseases = [
    "Corn (maize) - Cercospora leaf spot",
  ];

  const addMessage = (sender: string, text: string, image?: string) => {
    setMessages((prevMessages) => [...prevMessages, { sender, text, image }]);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);

      const imageUrl = URL.createObjectURL(file);
      
      addMessage("User", "I have uploaded the plant image for classification.", imageUrl);

      setTimeout(() => {
        addMessage("Bot", "Processing the image. Please wait...");
      }, 1000);

      setTimeout(() => {
        handleClassify(diseases[0]);
      }, 2000);
    }
  };

  const handleClassify = (disease: string) => {
    setLoading(true);
    setTimeout(() => {
      addMessage("Bot", `The plant disease identified is: ${disease}`);
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Add greeting message when component mounts
  useEffect(() => {
    addMessage("Bot", "Welcome to the Plant Disease Classification Chat! Please upload an image of a plant to get started.");
  }, []);

  return (
    <div className=" bg-gradient-to-br from-green-200 to-green-400 min-h-screen flex justify-center items-center p-4">
      <div className=" bg-gray-200 rounded-lg shadow-lg overflow-hidden w-3/4 h-full">
        <div className="bg-green-600 p-4 text-white">
          <h1 className="text-xl font-semibold text-center">Plant Disease Classification Chat</h1>
        </div>
        <div className="h-96 overflow-y-auto p-4 bg-gray-50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === "User" ? "justify-end" : "justify-start"} mb-4`}>
              <div className={`flex ${msg.sender === "User" ? "flex-row-reverse" : "flex-row"} items-end`}>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 ${msg.sender === "User" ? "bg-blue-500 ml-2" : "bg-green-500 mr-2"} flex items-center justify-center text-white font-bold`}>
                  {msg.sender === "User" ? "U" : "B"}
                </div>
                <div className={`max-w-xs ${
                  msg.sender === "User" ? "bg-blue-100 text-blue-800" : 
                  msg.text.includes("The plant disease identified is:") ? 
                  "bg-yellow-100 text-yellow-800" : 
                  "bg-green-100 text-green-800"
                } px-4 py-2 rounded-lg shadow`}>
                  <p className="text-sm">{msg.text}</p>
                  {msg.image && (
                    <img
                      src={msg.image}
                      alt="Uploaded preview"
                      className="mt-2 max-w-full rounded-lg shadow-sm"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-4 bg-white border-t border-gray-200">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            ref={fileInputRef}
            className="hidden"
          />
          <div className="flex space-x-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Upload Image
            </button>
            <button
              onClick={() => handleClassify(diseases[0])}
              className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              disabled={!selectedFile || loading}
            >
              {loading ? "Classifying..." : "Classify Disease"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;