import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
    const [title, setTitle] = useState('');
    const [Image, setImage] = useState('');
    const [header, setHeader] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [categoryImage, setCategoryImage] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [featureddescription, setFeaturedDescription] = useState([]);
    const [featuredImage, setFeaturedImage] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            featuredImage,
            featureddescription,
        };
        try {
            const response = await fetch('/api/createFeatured', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('Blog featured post created successfully');
            } else {
                console.error('Failed to create featured post');
            }   
        } catch (error) {
            console.error(error);
        }
    };


    const openDialog = () => {
        setIsOpen(true);
    };

    const closeDialog = () => {
        setIsOpen(false);
        setSelectedCategory('');
        setIsSubmitted(false);
    };

    useEffect(() => {
        // Fetch all categories on page load
        axios.get('/api/getCategory').then((res) => {
            setCategories(res.data.data);
        });
    }, []);

    const Addpost = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/api/createPost', {
                title,
                Image,
                header,
                description,
                author,
                date,
                category: selectedCategory,
            });

            console.log('Post created successfully');
        } catch (error) {
            console.error('Error adding post:', error);
        }
    };

    const addCategory = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/api/createCategory', {
                name,
                categoryImage,
            });

            console.log('Category created successfully');
        } catch (error) {
            console.error('Error adding category:', error);
        }
    };




    return (
        <div>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto  p-4">
           
            <div className="mb-4">
                <label htmlFor="featuredImage" className="block text-lg mb-1">
                    Featured Image URL
                </label>
                <input
                    type="text"
                    id="featuredImage"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Featured Image URL"
                    value={featuredImage}
                    onChange={(e) => setFeaturedImage(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="featureddescription" className="block text-lg mb-1">
                    Description
                </label>
                <input
                    type="text"
                    id="featureddescription"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Description"
                    value={featureddescription}
                    onChange={(e) => setFeaturedDescription(e.target.value)}
                />
            </div>
            <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Post
                </button>
            </form>
            <form onSubmit={Addpost} className="max-w-xl mx-auto  p-4">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-lg mb-1">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="headerImage" className="block text-lg mb-1">
                        Header Image URL
                    </label>
                    <input
                        type="text"
                        id="headerImage"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        placeholder="Header Image URL"
                        value={Image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="header" className="block text-lg mb-1">
                        Header
                    </label>
                    <textarea
                        id="header"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        placeholder="Header"
                        value={header}
                        onChange={(e) => setHeader(e.target.value)}
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-lg mb-1">
                        Description
                    </label>
                    <textarea
                        id="description"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="author" className="block text-lg mb-1">
                        Author
                    </label>
                    <input
                        type="text"
                        id="author"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        placeholder="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="date" className="block text-lg mb-1">
                        Date
                    </label>
                    <input
                        type="date"
                        id="date"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        placeholder="Date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="categoryName" className="block text-[#F6F4EE] font-bold font-darkage mb-2">
                        Category
                    </label>
                    <select
                        id="category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full border font-darkage bg-[#F6F4EE] text-[#5E474C] border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                        required
                    >
                        <option value="" >Select a category</option>
                        {categories.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
               

            </form>


            <form onSubmit={addCategory} className="max-w-xl mx-auto  p-4">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-lg mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="categoryImage" className="block text-lg mb-1">
                        Category image URL
                    </label>
                    <input
                        type="text"
                        id="categoryImage"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        placeholder="Category Image URL"
                        value={categoryImage}
                        onChange={(e) => setCategoryImage(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Set Category
                </button>

            </form>
        </div>

    );
};

export default AdminPanel;