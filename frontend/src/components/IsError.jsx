import React from "react"

export default function IsError({error, onRetry}){
    return (
      <div
        className="py-8"
        style={{
          background:
            "linear-gradient(90deg, rgb(209, 238, 252) 0%, rgb(229, 246, 254) 20%, rgb(236, 247, 253) 40%, rgb(224, 245, 253) 60%, rgb(236, 247, 253) 80%, rgb(237, 248, 255) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <strong>Lỗi: </strong> {error}
            <button 
              onClick={onRetry}
              className="ml-4 bg-red-600 text-white px-3 py-1 rounded text-sm"
            >
              Thử lại
            </button>
          </div>
        </div>
      </div>
    );
};
