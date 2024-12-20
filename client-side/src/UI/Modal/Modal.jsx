export default function Modal({ onClose, children }) {
      return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-2 py-1"
            >
              X
            </button>
            <div className="p-4">{children}</div>
          </div>
        </div>
      );
    }
    