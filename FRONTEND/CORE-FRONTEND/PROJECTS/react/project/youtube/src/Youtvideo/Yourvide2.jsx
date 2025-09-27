import React, { useState } from 'react';
import "./Yourvide2.css";
import { useSelector } from 'react-redux';

const Yourvide = () => {
  const [posts, setposts] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [visibility, setVisibility] = useState('private');
  const [category, setCategory] = useState('');

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleThumbnailSelect = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
    alert('Video published!');
  };

  return (
    <div className='yv'>
      <div className="video-post-container">
        <div className="header">
          <div className="logo">
            <span className="youtube-logo">YouTube</span>
          </div>
          <div className="user-profile">
            <div className="profile-pic"></div>
          </div>
        </div>

        <div className="main-content">
          <div className="upload-section">
            <h1>Upload Video</h1>
            <form className="upload-form" onSubmit={handleSubmit}>
              <div className="file-upload-area">
                <div className="upload-box">
                  {selectedFile ? (
                    <div className="file-selected">
                      <div className="video-icon">🎥</div>
                      <p>{selectedFile.name}</p>
                      <p className="file-size">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                    </div>
                  ) : (
                    <div className="upload-placeholder">
                      <div className="upload-icon">⬆️</div>
                      <p>Drag and drop video files to upload</p>
                      <p>Your videos will be private until you publish them.</p>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleFileSelect}
                    className="file-input"
                  />
                  <button type="button" className="select-files-btn" onClick={() => document.querySelector('.file-input').click()}>
                    SELECT FILES
                  </button>
                </div>
              </div>

              <div className="video-details">
                <div className="form-group">
                  <label htmlFor="title">Title (required)</label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add a title that describes your video"
                    maxLength="100"
                    required
                  />
                  <div className="char-count">{title.length}/100</div>
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Tell viewers about your video"
                    maxLength="5000"
                    rows="5"
                  />
                  <div className="char-count">{description.length}/5000</div>
                </div>

                <div className="form-group">
                  <label htmlFor="thumbnail">Thumbnail</label>
                  <div className="thumbnail-upload">
                    {thumbnail ? (
                      <div className="thumbnail-preview">
                        <img src={URL.createObjectURL(thumbnail)} alt="Thumbnail preview" />
                      </div>
                    ) : (
                      <div className="thumbnail-placeholder">
                        <span>📷</span>
                        <p>Upload thumbnail</p>
                      </div>
                    )}
                    <input
                      type="file"
                      id="thumbnail"
                      accept="image/*"
                      onChange={handleThumbnailSelect}
                      className="thumbnail-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="visibility">Visibility</label>
                    <select
                      id="visibility"
                      value={visibility}
                      onChange={(e) => setVisibility(e.target.value)}
                    >
                      <option value="private">Private</option>
                      <option value="unlisted">Unlisted</option>
                      <option value="public">Public</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="">Select category</option>
                      <option value="entertainment">Entertainment</option>
                      <option value="education">Education</option>
                      <option value="gaming">Gaming</option>
                      <option value="music">Music</option>
                      <option value="technology">Technology</option>
                      <option value="sports">Sports</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="save-draft-btn">
                  SAVE DRAFT
                </button>
                <button type="submit" className="publish-btn" disabled={!selectedFile || !title}>
                  PUBLISH
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Yourvide;
