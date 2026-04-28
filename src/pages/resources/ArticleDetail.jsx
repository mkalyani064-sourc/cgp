import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ResourceDetail.css';

const ArticleDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // This would normally come from an API/database
  const articleData = {
    title: 'How to Choose the Right Career Path After 12th',
    author: 'Dr. Priya Sharma',
    authorRole: 'Career Psychologist',
    authorImage: 'https://randomuser.me/api/portraits/women/1.jpg',
    date: 'June 15, 2023',
    readTime: '5 min read',
    category: 'Career Planning',
    image: 'https://images.pexels.com/photos/3769981/pexels-photo-3769981.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Career Planning', 'Students', '12th Grade', 'Guidance'],
    likes: 234,
    saves: 1890,
    content: [
      {
        type: 'paragraph',
        text: 'Choosing the right career path after 12th standard is one of the most crucial decisions in a student\'s life. With numerous options available across different streams, it can often feel overwhelming. This comprehensive guide will help you navigate through the decision-making process and find a path that aligns with your interests, skills, and goals.'
      },
      {
        type: 'heading',
        text: '1. Self-Assessment: Know Yourself'
      },
      {
        type: 'paragraph',
        text: 'Before exploring career options, it\'s essential to understand yourself. Ask yourself these questions: What subjects do you enjoy? What are your natural strengths? What kind of work environment suits you? What are your long-term goals?'
      },
      {
        type: 'quote',
        text: 'The best career choice is one that aligns your passions with your strengths and market demands.'
      },
      {
        type: 'heading',
        text: '2. Explore Your Options'
      },
      {
        type: 'paragraph',
        text: 'Research various career streams and the opportunities they offer. Consider factors like job market demand, growth potential, work-life balance, and earning potential. Don\'t limit yourself to traditional choices - explore emerging fields as well.'
      },
      {
        type: 'bullet-list',
        items: [
          'Science Stream: Engineering, Medicine, Research, Biotechnology',
          'Commerce Stream: Finance, Accounting, Business Management, Economics',
          'Arts Stream: Psychology, Journalism, Design, Social Work',
          'Vocational Courses: Digital Marketing, Web Development, Photography'
        ]
      },
      {
        type: 'heading',
        text: '3. Seek Guidance'
      },
      {
        type: 'paragraph',
        text: 'Talk to career counselors, teachers, professionals, and seniors. Their insights can provide valuable perspectives. Consider taking career assessment tests to get scientific insights into your aptitudes and interests.'
      },
      {
        type: 'heading',
        text: '4. Make an Informed Decision'
      },
      {
        type: 'paragraph',
        text: 'After gathering all information, create a pros and cons list for your top choices. Consider creating a 5-year plan and a 10-year vision. Remember, it\'s okay to change your path later - many successful professionals have switched careers.'
      }
    ],
    relatedArticles: [
      {
        id: 2,
        title: 'Top Scholarships for Indian Students',
        image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 3,
        title: 'Emerging Career Trends for 2024',
        image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  };

  return (
    <div className="resource-detail-page">
      {/* Back Button */}
      <div className="container">
        <button className="back-btn" onClick={() => navigate('/resources')}>
          <i className="fas fa-arrow-left"></i> Back to Resources
        </button>
      </div>

      {/* Hero Image */}
      <div className="detail-hero">
        <img src={articleData.image} alt={articleData.title} />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="category-tag">{articleData.category}</span>
          <h1>{articleData.title}</h1>
          <div className="hero-meta">
            <span><i className="far fa-calendar"></i> {articleData.date}</span>
            <span><i className="far fa-clock"></i> {articleData.readTime}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="detail-content">
        <div className="container">
          <div className="content-wrapper">
            {/* Author Info */}
            <div className="author-section">
              <img src={articleData.authorImage} alt={articleData.author} />
              <div>
                <h3>{articleData.author}</h3>
                <p>{articleData.authorRole}</p>
              </div>
            </div>

            {/* Article Body */}
            <div className="article-body">
              {articleData.content.map((item, index) => {
                switch(item.type) {
                  case 'heading':
                    return <h2 key={index}>{item.text}</h2>;
                  case 'paragraph':
                    return <p key={index}>{item.text}</p>;
                  case 'quote':
                    return (
                      <div key={index} className="quote-block">
                        <i className="fas fa-quote-left"></i>
                        <p>{item.text}</p>
                      </div>
                    );
                  case 'bullet-list':
                    return (
                      <ul key={index} className="bullet-list">
                        {item.items.map((listItem, idx) => (
                          <li key={idx}>{listItem}</li>
                        ))}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}
            </div>

            {/* Tags */}
            <div className="article-tags">
              {articleData.tags.map((tag, index) => (
                <span key={index} className="tag">#{tag}</span>
              ))}
            </div>

            {/* Engagement Stats */}
            <div className="engagement-stats">
              <span><i className="far fa-heart"></i> {articleData.likes} likes</span>
              <span><i className="far fa-bookmark"></i> {articleData.saves} saves</span>
              <span><i className="far fa-share-square"></i> Share</span>
            </div>
          </div>

          {/* Sidebar */}
          <div className="content-sidebar">
            <div className="sidebar-widget">
              <h3>Related Articles</h3>
              {articleData.relatedArticles.map(article => (
                <div 
                  key={article.id} 
                  className="related-article"
                  onClick={() => navigate(`/resources/article/${article.id}`)}
                >
                  <img src={article.image} alt={article.title} />
                  <p>{article.title}</p>
                </div>
              ))}
            </div>

            <div className="sidebar-widget">
              <h3>Take Assessment</h3>
              <p>Find the perfect career path with our scientific assessment</p>
              <button className="sidebar-btn" onClick={() => navigate('/assessment')}>
                Start Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;