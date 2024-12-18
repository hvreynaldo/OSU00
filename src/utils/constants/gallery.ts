import { ArtworkFilter, ArtworkItem } from '../types';

export const ARTWORK_FILTERS: ArtworkFilter[] = [
  { label: 'All', value: 'all' },
  { label: 'Image AI', value: 'image-ai' },
  { label: 'Stable Diffusion', value: 'stable-diffusion' },
  { label: 'DALL-E', value: 'dall-e' },
  { label: 'Videos AI', value: 'video-ai' }
];

export const GALLERY_ITEMS: ArtworkItem[] = [
  // Imagen AI Artworks
  {
    id: 'img1',
    title: 'Neural Network Dreamscape',
    aiModel: 'Image AI',
    description: 'Ethereal visualization of neural networks, featuring interconnected nodes with glowing energy pathways in a crystalline digital space.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734203189/universal_upscale_0_5febc5e1-7f3b-432f-941c-1da6be382278_0_ni1zuq.jpg',
    createdAt: '2024-03-15',
    type: 'image'
  },
  {
    id: 'img2',
    title: 'Quantum Computing Nexus',
    aiModel: 'Image AI',
    description: 'Abstract representation of quantum computing processes, with floating qubits and data streams in a mesmerizing cosmic environment.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734203189/universal_upscale_0_abd0d823-e3c2-4ef4-9750-09326f620a58_0_ckfqgx.jpg',
    createdAt: '2024-03-14',
    type: 'image'
  },
  {
    id: 'img3',
    title: 'Digital Evolution Synthesis',
    aiModel: 'Image AI',
    description: 'Futuristic visualization of AI evolution, featuring organic-digital hybrid structures in a dynamic, evolving landscape.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734203190/universal_upscale_0_bd2c6e8e-f998-4a11-a061-67e035f15d82_0_qyaaq3.jpg',
    createdAt: '2024-03-13',
    type: 'image'
  },
  {
    id: 'img4',
    title: 'Cybernetic Consciousness',
    aiModel: 'Image AI',
    description: 'A stunning blend of human consciousness and artificial intelligence, rendered in iridescent neural patterns.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734203704/universal_upscale_0_5c4ce892-0c72-44e7-94b0-f726f54a2b33_0_upi9rz.jpg',
    createdAt: '2024-03-12',
    type: 'image'
  },
  {
    id: 'img5',
    title: 'Algorithmic Harmony',
    aiModel: 'Image AI',
    description: 'Complex algorithmic patterns forming a harmonious composition of mathematical beauty and artistic expression.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734203711/universal_upscale_0_67dfce27-01d3-4fa0-894e-ba2718b99fe9_0_rbgehs.jpg',
    createdAt: '2024-03-11',
    type: 'image'
  },
  {
    id: 'img6',
    title: 'Synthetic Synapses',
    aiModel: 'Image AI',
    description: 'Intricate neural network visualization with bioluminescent connections in a deep learning architecture.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734203711/universal_upscale_0_aa7d23dc-16d8-46f1-96f4-7e6829b23fdd_0_cxfvug.jpg',
    createdAt: '2024-03-10',
    type: 'image'
  },
  {
    id: 'img7',
    title: 'Quantum Entanglement',
    aiModel: 'Image AI',
    description: 'Visualization of quantum particles in a state of entanglement, showcasing the mysterious connections of quantum mechanics.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734203727/universal_upscale_0_cb78f987-8dc0-4055-b52a-afcc0805657b_0_w4j9ul.jpg',
    createdAt: '2024-03-09',
    type: 'image'
  },
  {
    id: 'img8',
    title: 'Digital Dreamweaver',
    aiModel: 'Image AI',
    description: 'Abstract representation of AI-generated dreams, featuring flowing data streams and neural pathways.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734203732/universal_upscale_0_44601da0-e836-439a-a805-855f17e30547_0_qa5c65.jpg',
    createdAt: '2024-03-08',
    type: 'image'
  },
  {
    id: 'img9',
    title: 'Neural Nexus Gateway',
    aiModel: 'Image AI',
    description: 'A portal into the digital consciousness, showcasing the intersection of artificial and organic neural networks.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734203733/universal_upscale_0_4d83f67d-8a7a-4ff2-b9b5-e144141cdcb3_0_owachz.jpg',
    createdAt: '2024-03-07',
    type: 'image'
  },
  {
    id: 'img10',
    title: 'Neural Nexus Gateway',
    aiModel: 'Image AI',
    description: 'A portal into the digital consciousness, showcasing the intersection of artificial and organic neural networks.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734304693/Art_qtausm.png',
    createdAt: '2024-03-07',
    type: 'image'
  },
  {
    id: 'img11',
    title: 'Neural Nexus Gateway',
    aiModel: 'Image AI',
    description: 'A portal into the digital consciousness, showcasing the intersection of artificial and organic neural networks.',
imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734304689/Leonardo_Phoenix_a_field_with_a_cow_just_replace_the_colors_fo_1_sbatqc.jpg',
    createdAt: '2024-03-07',
    type: 'image'
  },
 {
    id: 'img12',
    title: 'Neural Nexus Gateway',
    aiModel: 'Image AI',
    description: 'A portal into the digital consciousness, showcasing the intersection of artificial and organic neural networks.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734465606/greentractor1_x6a3jr.jpg',
    createdAt: '2024-03-07',
    type: 'image'
  },
 {
    id: 'img13',
    title: 'Neural Nexus Gateway',
    aiModel: 'Image AI',
    description: 'A portal into the digital consciousness, showcasing the intersection of artificial and organic neural networks.',
imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734465973/Hamm_institute_exterior_cnqofe.png',
    createdAt: '2024-03-07',
    type: 'image'
  },
 {
    id: 'img14',
    title: 'Neural Nexus Gateway',
    aiModel: 'Image AI',
    description: 'A portal into the digital consciousness, showcasing the intersection of artificial and organic neural networks.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734465973/221025_usri_demo_022_fnq9kd.png',
    createdAt: '2024-03-07',
    type: 'image'
  },
 {
    id: 'img15',
    title: 'Neural Nexus Gateway',
    aiModel: 'Image AI',
    description: 'A portal into the digital consciousness, showcasing the intersection of artificial and organic neural networks.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734452358/8_g0trj8.png',
    createdAt: '2024-03-07',
    type: 'image'
  },
 {
    id: 'img16',
    title: 'Neural Nexus Gateway',
    aiModel: 'Image AI',
    description: 'A portal into the digital consciousness, showcasing the intersection of artificial and organic neural networks.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734452381/AI_Backend_Workflow_hepco6.jpg',
    createdAt: '2024-03-07',
    type: 'image'
  },
 {
    id: 'img17',
    title: 'Neural Nexus Gateway',
    aiModel: 'Image AI',
    description: 'A portal into the digital consciousness, showcasing the intersection of artificial and organic neural networks.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734452359/5_lnz6ig.png',
    createdAt: '2024-03-07',
    type: 'image'
  },
 {
    id: 'img18',
    title: 'Neural Nexus Gateway',
    aiModel: 'Image AI',
    description: 'A portal into the digital consciousness, showcasing the intersection of artificial and organic neural networks.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734452359/1_vf0fvp.png',
    createdAt: '2024-03-07',
    type: 'image'
  },
 {
    id: 'img19',
    title: 'Neural Nexus Gateway',
    aiModel: 'Image AI',
    description: 'A portal into the digital consciousness, showcasing the intersection of artificial and organic neural networks.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734452359/3_vz4odq.png',
    createdAt: '2024-03-07',
    type: 'image'
  },

   // Stable Diffusion Artwork
  {
    id: 'sd1',
    title: 'Neural Evolution',
    aiModel: 'Stable Diffusion',
    description: 'Dynamic visualization of neural network evolution, showcasing the fluid transformation of AI learning processes.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734214789/1214_a9dspv.gif',
    createdAt: '2024-03-15',
    type: 'image'
  },
  
  // Video AI Artworks
  {
    id: 'v1',
    title: 'Neural Dance Composition',
    aiModel: 'Video AI',
    description: 'AI-generated choreography showcasing fluid motion and dynamic patterns.',
    type: 'video',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734234062/1214_2_njo3na.gif',
    createdAt: '2024-03-15'
  },
  {
    id: 'v2',
    title: 'Digital Metamorphosis',
    aiModel: 'Video AI',
    description: 'Real-time transformation of abstract patterns into recognizable forms through AI evolution.',
    type: 'video',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734234071/1214_4_n0flmi.gif',
    createdAt: '2024-03-14'
  },
  {
    id: 'v3',
    title: 'Synthetic Reality Flow',
    aiModel: 'Video AI',
    description: 'Seamless blend of real and artificial elements in a continuous flow of visual transformation.',
    type: 'video',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734234259/1214_5_cltwry.gif',
    createdAt: '2024-03-13'
  },
   {
    id: 'v4',
    title: 'Synthetic Reality Flow',
    aiModel: 'Video AI',
    description: 'Seamless blend of real and artificial elements in a continuous flow of visual transformation.',
    type: 'video',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734234342/1214_7_q7heha.gif',
    createdAt: '2024-03-13'
  },
   {
    id: 'v5',
    title: 'Synthetic Reality Flow',
    aiModel: 'Video AI',
    description: 'Seamless blend of real and artificial elements in a continuous flow of visual transformation.',
    type: 'video',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734234403/1214_9_uvjubq.gif',
    createdAt: '2024-03-13'
  },
  {
    id: 'v6',
    title: 'Synthetic Reality Flow',
    aiModel: 'Video AI',
    description: 'Seamless blend of real and artificial elements in a continuous flow of visual transformation.',
    type: 'video',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734234448/1214_6_izirvh.gif',
    createdAt: '2024-03-13'
  },
  {
    id: 'v7',
    title: 'Synthetic Reality Flow',
    aiModel: 'Video AI',
    description: 'Seamless blend of real and artificial elements in a continuous flow of visual transformation.',
    type: 'video',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734234449/1214_8_yazkad.gif',
    createdAt: '2024-03-13'
  },
  {
    id: 'v8',
    title: 'Synthetic Reality Flow',
    aiModel: 'Video AI',
    description: 'Seamless blend of real and artificial elements in a continuous flow of visual transformation.',
    type: 'video',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734234489/1214_1_travdt.gif',
    createdAt: '2024-03-13'
  },
  {
    id: 'v9',
    title: 'Synthetic Reality Flow',
    aiModel: 'Video AI',
    description: 'Seamless blend of real and artificial elements in a continuous flow of visual transformation.',
    type: 'video',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734234527/1214_3_hukhd4.gif',
    createdAt: '2024-03-13'
  },
  // DALL-E Artworks
  {
    id: 'dal1',
    title: 'Neural Network Visualization',
    aiModel: 'dall-e',
    description: 'A stunning visualization of neural networks with interconnected nodes and pathways.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734223253/DALL_E_2024-12-14_17.39.04_-_A_cinematic_image_featuring_a_majestic_university_campus_with_a_futuristic_twist._The_backdrop_showcases_the_text_The_Innovation_Foundation_at_OSU_i_howfkg.webp',
    createdAt: '2024-03-18',
    type: 'image'
  },
  {
    id: 'dal2',
    title: 'AI Learning Patterns',
    aiModel: 'dall-e',
    description: 'Abstract representation of AI learning patterns and data processing.',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734223264/DALL_E_2024-12-14_17.43.40_-_A_cinematic_image_featuring_a_majestic_university_campus_with_a_futuristic_twist._The_backdrop_showcases_the_text_The_Innovation_Foundation_at_OSU_i_z9lzpt.webp',
    createdAt: '2024-03-17',
    type: 'image'
  }
];