import React from 'react';
import styled from 'styled-components';

const Link = ({ url, title }) => {
  return(
    <a href={url} target="_blank" rel="noreferrer">
      {title}
    </a>
  );
};

const Story = ({ story: { id, by, title, kids, time, url } }) => {
  return(
    <StoryContainer>
      <Title>
        <Link url={url} title={title} />
      </Title>
      <Info>
        <span>
          by{' '}
          <Link url={`https://news.ycombinator.com/user?id=${by}`} title={by} />
        </span>
        |<span>
          {new Date(time * 1000).toLocaleDateString('en-US', {
            hour: 'numeric',
            minute: 'numeric'
          })}
        </span>|
        <span>
          <Link
            url={`https://news.ycombinator.com/item?id=${id}`}
            title={`${kids && kids.length >0 ? kids.length : 0} comments`}
          />
        </span>
      </Info>
    </StoryContainer>
  );
};

export default Story;

const StoryContainer = styled.div`
  width: 80%;
  margin: 10px auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

const Title = styled.div`
  margin-bottom: 4px;

  a {
    font-size: 18px;
    color: #e17055;
    text-decoration: none;
  }
`;

const Info = styled.div`
  color: #b55a44;

  span {
    margin: 4px;
  }

  a {
    color: inherit;
  }
`;