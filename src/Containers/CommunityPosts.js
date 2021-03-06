import PostCard from '../Components/PostCard';

export default function CommunityPosts({ posts, community }) {

    const displayPosts = () => {
        if (community) {
            return posts.filter(post => post.community_id === community.id).map(post => <PostCard key={post.id} title={post.title} content={post.content} username={post.user.username} time={post.created_at}  />)
        }
    }

    return (
        <div className="flex flex-col items-center justify-end w-full h-3/4 max-h-118 overflow-hidden">
            {displayPosts()}
        </div>
    )
}
