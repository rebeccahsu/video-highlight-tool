import { FileVideo, Upload } from "lucide-react";
import type { VideoUploadProps } from "../types";

export const VideoUpload: React.FC<VideoUploadProps> = ({ onVideoUpload }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onVideoUpload(file);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-12">
        <FileVideo className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Upload a video</h3>
        <p className="text-gray-500 mb-4">Select a video file to start creating highlights</p>
        <label className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg cursor-pointer inline-flex items-center">
          <Upload className="mr-2 h-5 w-5" />
          Choose Video
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};