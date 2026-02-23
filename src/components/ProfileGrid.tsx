interface Profile {
    name: string;
    age: number;
    location: string;
    imageUrl: string;
    isOnline: boolean;
}

const profiles: Profile[] = [
    {
        name: 'Emma',
        age: 24,
        location: 'New York',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop&crop=faces',
        isOnline: true,
    },
    {
        name: 'Sofia',
        age: 22,
        location: 'Los Angeles',
        imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=faces',
        isOnline: false,
    },
    {
        name: 'Olivia',
        age: 26,
        location: 'Miami',
        imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop&crop=faces',
        isOnline: true,
    },
    {
        name: 'Isabella',
        age: 23,
        location: 'Chicago',
        imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop&crop=faces',
        isOnline: true,
    },
    {
        name: 'Ava',
        age: 28,
        location: 'Houston',
        imageUrl: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=600&fit=crop&crop=faces',
        isOnline: false,
    },
    {
        name: 'Mia',
        age: 25,
        location: 'San Diego',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&crop=faces',
        isOnline: true,
    },
    {
        name: 'Luna',
        age: 21,
        location: 'Phoenix',
        imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop&crop=faces',
        isOnline: true,
    },
    {
        name: 'Chloe',
        age: 27,
        location: 'Dallas',
        imageUrl: 'https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=400&h=600&fit=crop&crop=faces',
        isOnline: false,
    },
    {
        name: 'Zoe',
        age: 23,
        location: 'Seattle',
        imageUrl: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=600&fit=crop&crop=faces',
        isOnline: true,
    },
    {
        name: 'Lily',
        age: 29,
        location: 'Boston',
        imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=600&fit=crop&crop=faces',
        isOnline: false,
    },
    {
        name: 'Nora',
        age: 24,
        location: 'Denver',
        imageUrl: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=400&h=600&fit=crop&crop=faces',
        isOnline: false,
    },
    {
        name: 'Aria',
        age: 26,
        location: 'Atlanta',
        imageUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400&h=600&fit=crop&crop=faces',
        isOnline: true,
    },
    {
        name: 'Maya',
        age: 25,
        location: 'Las Vegas',
        imageUrl: 'https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=400&h=600&fit=crop&crop=faces',
        isOnline: true,
    },
    {
        name: 'Kate',
        age: 23,
        location: 'Portland',
        imageUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=600&fit=crop&crop=faces',
        isOnline: false,
    },
    {
        name: 'Amber',
        age: 27,
        location: 'Nashville',
        imageUrl: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=400&h=600&fit=crop&crop=faces',
        isOnline: true,
    },
];

function ProfileCard({ name, age, location, imageUrl, isOnline }: Profile) {
    return (
        <div className="rounded-2xl overflow-hidden relative shadow-lg">
            <div className="aspect-[3/4] relative">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent p-3">
                    <div className="flex items-center gap-1.5 mb-0.5">
                        <span className={`w-2 h-2 rounded-full shrink-0 ${isOnline ? 'bg-green-400' : 'bg-red-400'}`} />
                        <span className="text-white font-semibold text-sm leading-tight">
                            {name}, {age}
                        </span>
                    </div>
                    <p className="text-white/70 text-xs">{location}</p>
                </div>
            </div>
        </div>
    );
}

export function ProfileGrid() {
    return (
        <div className="w-full md:w-[40vw] mx-auto px-0 md:px-4 py-4">
            <div className="grid grid-cols-3 gap-2 md:gap-3">
                {profiles.map((profile, index) => (
                    <ProfileCard key={index} {...profile} />
                ))}
            </div>
        </div>
    );
}
