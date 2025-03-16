import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../../src/components/ProductImageGallery';

describe('ProductImageGallery', () => {
  it('should return null when imageUrls is empty', () => {
    const imageUrls: string[] = [];
    const { container } = render(<ProductImageGallery
      imageUrls={imageUrls}
    />)
    expect(container).toBeEmptyDOMElement();
  })
  it('should render list of images', () => {
    const imageUrls = [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg"
    ];
    render(<ProductImageGallery
      imageUrls={imageUrls}
    />)
    const ul = screen.getByRole('list');
    expect(ul).toBeInTheDocument();
    const lis = screen.getAllByRole('listitem');
    expect(lis).toHaveLength(imageUrls.length);
    const images = screen.getAllByRole('img');
    imageUrls.forEach((url, i) => {
      expect(images[i]).toHaveAttribute('src', url);
    })
  })
})