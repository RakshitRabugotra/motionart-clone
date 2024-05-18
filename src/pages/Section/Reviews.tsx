import Heading from '@/components/Heading'
import { REVIEWS, ReviewType } from '@/utils/content'

export default function Reviews() {
  return (
    <div className='flex flex-col items-center py-3'>
      <Heading className='font-outfit text-[22px] font-normal leading-none'>
        {'Trusted by thousands of users around the world'}
      </Heading>
      <div
        id='review-panel'
        className='flex w-[65vw] flex-col items-center gap-14 pt-12'
      >
        {REVIEWS.map((review: ReviewType) => {
          return (
            <div className='flex w-full flex-row '>
              <img src={review.imageSrc} loading='lazy' decoding='async' />
              <div className='ml-4 flex grow flex-col self-stretch'>
                <img
                  src={review.starSrc}
                  loading='lazy'
                  decoding='async'
                  className='my-auto w-full'
                />
                <p className='font-sora py-2 text-sm text-light-300/75'>
                  <strong>{review.score}</strong> Score, {review.reviewCount}{' '}
                  Reviews
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
