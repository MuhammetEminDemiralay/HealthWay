import { Exercise } from "../model/activity";


export const exercise: Exercise[] = [
    {
        exerciseName: 'Walking',
        time: 30,
        options: [
            { optionName: 'To Work or Class', calorie: 109 },
            { optionName: 'Less Than 2.0 mph (3.2 km/h)', calorie: 47 },
            { optionName: 'Walking Than 2.0 mph (3.2 km/h)', calorie: 65 },
            { optionName: '2.5 mph (4 km/h)', calorie: 72 },
            { optionName: '3.0 mph (4.8 km/h)', calorie: 91 },
            { optionName: '3.5 mph (5.6 km/h)', calorie: 138 },
            { optionName: '4.0 mph (7.2 km/h)', calorie: 217 },
            { optionName: 'Walking, 5.0 mph (8.1 km/h)', calorie: 163 },
            { optionName: 'For pleasure, Work break', calorie: 91 },
            { optionName: 'Downhill', calorie: 83 },
            { optionName: 'Treadmill desk workstation', calorie: 36 },
            { optionName: 'With Stroller', calorie: 101 },
            { optionName: 'Race', calorie: 199 },
            { optionName: 'Walking the Dog', calorie: 72 }
        ],
        description: "Walking is a low-impact exercise suitable for all ages. It's easy to incorporate into your daily routine and is beneficial for weight loss, heart health, and overall fitness."
    },
    {
        exerciseName: 'Running',
        time: 30,
        options: [
            { optionName: 'Jogging', calorie: 235 },
            { optionName: 'Jog/Walk Combination', calorie: 181 },
            { optionName: 'Jogging in Place', calorie: 138 },
            { optionName: '4 mph (15 min/mil, 6.4 km/h)', calorie: 199 },
            { optionName: '5 mph (12 min/mil, 8.1 km/h)', calorie: 272 },
            { optionName: '5.2 mph (11.5 min/mil, 8.4 km/h)', calorie: 272 },
            { optionName: '6 mph (10 min/mil, 9.7 km/h)', calorie: 308 },
            { optionName: '6.7 mph (9 min/mil, 10.8 km/h)', calorie: 344 },
            { optionName: '7 mph (8.5 min/mil, 11.3 km/h)', calorie: 362 },
            { optionName: '7.5 mph (8 min/mil, 12.1 km/h)', calorie: 391 },
            { optionName: '8 mph (7.5 min/mil, 12.9 km/h)', calorie: 398 },
            { optionName: '8.6 mph (7 min/mil, 13.9 km/h)', calorie: 417 },
            { optionName: '9 mph (6.5 min/mil, 14.5 km/h)', calorie: 435 },
            { optionName: '10 mph (6 min/mil, 16 km/h)', calorie: 500 },
            { optionName: '11 mph (5.5 min/mil, 17.7 km/h)', calorie: 572 },
            { optionName: '12 mph (5 min/mil, 19.3 km/h)', calorie: 634 },
            { optionName: '13 mph (4.6 min/mil, 20.9 km/h)', calorie: 681 },
            { optionName: '14 mph (4.3 min/mil, 22.5 km/h)', calorie: 797 },
            { optionName: 'Running, cross country', calorie: 301 },
            { optionName: 'Running, marathon', calorie: 446 },
            { optionName: 'Track, Team Practice', calorie: 326 },
            { optionName: 'Upstairs', calorie: 507 },
            { optionName: 'Pushing a Baby Carrier', calorie: 254 },
        ],
        description: "Running is an excellent way to burn calories and improve endurance. Regular running enhances cardiovascular health and helps manage stress."
    },
    {
        exerciseName: 'Bicycling',
        time: 30,
        options: [
            { optionName: 'General', calorie: 217 },
            { optionName: 'To/From Work', calorie: 210 },
            { optionName: 'Leisure or Work 5.5 mph (8.9 km/h)', calorie: 91 },
            { optionName: 'Leisure or Work < 10 mph (< 16 km/h)', calorie: 109 },
            { optionName: 'Modarate 12-14 mph (19.3-22.5 km/h)', calorie: 254 },
            { optionName: 'Vigorus 14-16 mph (22.5-25.8 km/h)', calorie: 326 },
            { optionName: 'Racing 16-19 mph (25.8-30.6 km/h)', calorie: 398 },
            { optionName: 'Bicycling, Racing > 20 mph (> 32 km/h)', calorie: 572 },
            { optionName: 'BMX', calorie: 272 },
            { optionName: 'Dirt Road', calorie: 194 },
        ],
        description: "Bicycling strengthens leg muscles and boosts calorie burning. It can be done outdoors or on a stationary bike, offering a low-impact cardio workout that's easy on the joints."
    },
    {
        exerciseName: 'Abdominal',
        time: 30,
        options: [
            { optionName: 'Light-moderate', calorie: 91 },
            { optionName: 'Vigorous', calorie: 254 },
        ],
        description: "Abdominal exercises target the core muscles, helping to improve posture, stability, and overall strength. Common exercises include sit-ups, crunches, and planks."
    },
    {
        exerciseName: 'Activity Video Game',
        time: 30,
        options: [
            { optionName: 'Aerobic or Resistance', calorie: 109 },
            { optionName: 'Balance or Yoga', calorie: 47 },
            { optionName: 'Exergaming, DDR', calorie: 235 },
            { optionName: 'Wii Fit Baseball', calorie: 47 },
            { optionName: 'Wii Fit Bowling', calorie: 47 },
            { optionName: 'Wii Fit Boxing', calorie: 101 },
            { optionName: 'Wii Fit Golf', calorie: 47 },
            { optionName: 'Balance or Tennis', calorie: 101 },
        ],
        description: "Activity video games involve physical movement, making gaming an interactive way to burn calories and stay active. Popular examples include dance, sports, and fitness games."
    },
    {
        exerciseName: 'Aerobic',
        time: 30,
        options: [
            { optionName: 'General', calorie: 228 },
            { optionName: 'Dance Wearing Weights', calorie: 326 },
            { optionName: 'Hight Impact', calorie: 326 },
            { optionName: 'Low Impact', calorie: 254 },
            { optionName: 'Step 10-12 Inch', calorie: 290 },
            { optionName: 'Step 4 Inch', calorie: 163 },
            { optionName: 'Step 6-8 Inch', calorie: 228 },
        ],
        description: "Aerobic exercises involve continuous, rhythmic activity that increases heart rate and improves cardiovascular endurance. Examples include dancing, swimming, and jumping rope."
    },
    {
        exerciseName: 'Archery',
        time: 30,
        options: [
            { optionName: 'Archery', calorie: 120 },
        ],
        description: "Archery combines precision, focus, and upper body strength. It's a low-impact activity that helps improve concentration and builds strength in the arms, shoulders, and back."
    },
    {
        exerciseName: 'Bakpacking',
        time: 30,
        options: [
            { optionName: 'Hiking', calorie: 217 },
            { optionName: 'With Daypack', calorie: 246 },
            { optionName: 'Climbing Hills, No Load', calorie: 145 },
            { optionName: 'Climbing Hills, with 0-9 lb Load', calorie: 199 },
            { optionName: 'Climbing Hills with 10-20 lb Load', calorie: 199 },
            { optionName: 'Climbing Hills with 21-42 lb Load', calorie: 235 },
            { optionName: 'Climbing Hills with 42+ lb Load', calorie: 290 },
        ],
        description: "Backpacking is an outdoor activity that combines hiking with carrying gear. It improves cardiovascular fitness, builds endurance, and strengthens lower body muscles."
    },
    {
        exerciseName: 'Badminton',
        time: 30,
        options: [
            { optionName: 'Casual', calorie: 163 },
            { optionName: 'Competitive', calorie: 217 },
        ],
        description: "Badminton is a fast-paced racquet sport that enhances hand-eye coordination and improves cardiovascular health. It’s a fun way to boost agility and burn calories."
    },
    {
        exerciseName: 'Baseball',
        time: 30,
        options: [
            { optionName: 'Baseball', calorie: 145 },
        ],
        description: "Baseball involves running, throwing, and batting, which engages multiple muscle groups. It helps improve coordination, strength, and teamwork skills."
    },
    {
        exerciseName: 'Basketball',
        time: 30,
        options: [
            { optionName: 'Baseball', calorie: 235 },
            { optionName: 'Pracice Drills', calorie: 301 },
            { optionName: 'Game', calorie: 254 },
            { optionName: 'Shooting Baskets', calorie: 145 },
            { optionName: 'Officating', calorie: 217 },
            { optionName: 'Wheelchair', calorie: 246 },
        ],
        description: "Basketball is a high-energy team sport that builds endurance, improves coordination, and strengthens muscles. It’s an excellent way to improve both aerobic fitness and agility."
    },
    {
        exerciseName: 'Bench press',
        time: 30,
        options: [
            { optionName: 'Light-moderate', calorie: 91 },
            { optionName: 'Vigorous', calorie: 181 },
        ],
        description: "The bench press is a strength-training exercise that primarily targets the chest, shoulders, and triceps. It helps build upper body strength and muscle mass."
    },
    {
        exerciseName: 'Bicyling Mountain',
        time: 30,
        options: [
            { optionName: 'General', calorie: 272 },
            { optionName: 'Racing', calorie: 543 },
            { optionName: 'Uphill, Vigorous', calorie: 471 },
        ],
        description: "Mountain biking is an adventurous, high-intensity activity that builds leg muscles, improves cardiovascular fitness, and enhances balance while navigating rough terrain."
    },
    {
        exerciseName: 'Bicyling Recumbent',
        time: 30,
        options: [
            { optionName: 'For Leisure < 10 mph (<16 km/h)', calorie: 109 },
            { optionName: 'Slow 10-12 mph (<16.1-19.3 km/h)', calorie: 210 },
            { optionName: 'Moderate 12-14 mph (<19.3-22.5 km/h)', calorie: 254 },
            { optionName: 'Fast 14-16 mph (<22.5-25.8 km/h)', calorie: 326 },
            { optionName: 'Racing 16-18 mph (<25.8-30 km/h)', calorie: 398 },
        ],
        description: "Recumbent biking involves riding in a reclined position, reducing strain on the back and joints. It offers a comfortable way to work on cardiovascular fitness and leg strength."
    },
    {
        exerciseName: 'Billiards',
        time: 30,
        options: [
            { optionName: 'Billiards', calorie: 54 },
        ],
        description: "Billiards, or pool, is a low-impact game that improves focus, hand-eye coordination, and strategic thinking. It's more about mental sharpness than physical exertion."
    },
    {
        exerciseName: 'Bowling',
        time: 30,
        options: [
            { optionName: 'Bowling', calorie: 72 },
        ],
        description: "Bowling is a fun, low-impact activity that engages arm muscles and improves coordination. It’s a social game that also provides light physical activity."
    },
    {
        exerciseName: 'Boxing',
        time: 30,
        options: [
            { optionName: 'Punching Bag', calorie: 174 },
            { optionName: 'In Ring', calorie: 427 },
            { optionName: 'Sparring', calorie: 246 },
        ],
        description: "Boxing is an intense, full-body workout that builds strength, endurance, and agility. It’s also excellent for improving reflexes and cardiovascular health."
    },
    {
        exerciseName: 'Cheerleading',
        time: 30,
        options: [
            { optionName: 'Cheerleading', calorie: 181 },
        ],
        description: "Cheerleading is a dynamic activity that combines gymnastics, dance, and stunts. It enhances flexibility, coordination, and teamwork while being a great cardio workout."
    },
    {
        exerciseName: 'Chores',
        time: 30,
        options: [
            { optionName: 'Cleaning', calorie: 83 },
            { optionName: 'Cooking and Kitching', calorie: 181 },
            { optionName: 'Cleaning, Heavy or Major', calorie: 91 },
            { optionName: 'Laundry', calorie: 47 },
            { optionName: 'Vacuuming', calorie: 72 },
            { optionName: 'Cleaning Gutters', calorie: 145 },
        ],
        description: "Household chores, like cleaning and gardening, are physical activities that can burn calories and improve overall fitness. They help with mobility and stamina in everyday life."
    },
    {
        exerciseName: 'Circuit Training',
        time: 30,
        options: [
            { optionName: 'With Aerobic Movements', calorie: 235 },
            { optionName: 'Moderate', calorie: 145 },
        ],
        description: "Circuit training involves moving through a series of exercises with minimal rest in between. It combines cardio and strength training, providing a full-body workout in a short time."
    },
    {
        exerciseName: 'Coaching',
        time: 30,
        options: [
            { optionName: 'Coaching', calorie: 109 },
        ],
        description: "Coaching refers to guiding others in sports or fitness, focusing on skill development, strategy, and motivation. While not as physically intense, it involves mental sharpness and leadership."
    },
    {
        exerciseName: 'Cricket',
        time: 30,
        options: [
            { optionName: 'Cricket', calorie: 138 },
        ],
        description: "Cricket is a team sport that involves batting, bowling, and fielding. It improves coordination, agility, and endurance, while also fostering teamwork and strategic thinking."
    },
    {
        exerciseName: 'Crunches',
        time: 30,
        options: [
            { optionName: 'Light-moderate', calorie: 91 },
            { optionName: 'Vigorous', calorie: 254 },
        ],
        description: "Crunches are a core-strengthening exercise that specifically targets the abdominal muscles. They help build core stability and improve overall balance."
    },
    {
        exerciseName: 'Curling',
        time: 30,
        options: [
            { optionName: 'Curling', calorie: 109 },
        ],
        description: "Curling is a precision-based ice sport that requires strength, balance, and teamwork. While low-impact, it involves strategic thinking and coordination."
    },
    {
        exerciseName: 'Curves',
        time: 30,
        options: [
            { optionName: 'Curves', calorie: 91 },
        ],
        description: "Curves refers to a women-focused fitness program that combines strength training with aerobic exercises, typically in a circuit format for overall body conditioning."
    },
    {
        exerciseName: 'Darts',
        time: 30,
        options: [
            { optionName: 'Darts', calorie: 54 },
        ],
        description: "Darts is a low-impact game that improves hand-eye coordination and concentration. Though it’s more of a mental challenge, it can also be a social activity."
    },
    {
        exerciseName: 'Dumbell',
        time: 30,
        options: [
            { optionName: 'Dumbell', calorie: 145 },
        ],
        description: "Dumbbell exercises involve using free weights to target various muscle groups. They improve muscle strength, endurance, and coordination, and can be used in both upper and lower body exercises."
    },
    {
        exerciseName: 'Elliptical',
        time: 30,
        options: [
            { optionName: 'Moderate', calorie: 145 },
            { optionName: 'Vigorous', calorie: 254 },
        ],
        description: "The elliptical machine provides a low-impact cardiovascular workout that mimics walking, running, or climbing without putting stress on the joints. It’s great for endurance and calorie burning."
    },
    {
        exerciseName: 'Exercise Ball',
        time: 30,
        options: [
            { optionName: 'Exercise Ball', calorie: 308 },
        ],
        description: "Exercise ball workouts focus on core strength and balance. The instability of the ball engages multiple muscles at once, making it ideal for strengthening the core and improving stability."
    },
    {
        exerciseName: 'Fencing',
        time: 30,
        options: [
            { optionName: 'Fencing', calorie: 181 },
        ],
        description: "Fencing is a fast-paced sport that improves agility, balance, and coordination. It’s a full-body workout that also sharpens reflexes and strategic thinking."
    },
    {
        exerciseName: 'Fishing',
        time: 30,
        options: [
            { optionName: 'General', calorie: 36 },
            { optionName: 'From Boat', calorie: 36 },
            { optionName: 'From River Bank', calorie: 91 },
            { optionName: 'Ice', calorie: 36 },
            { optionName: 'Standing', calorie: 129 },
        ],
        description: "Fishing is a relaxing activity that can offer light physical exercise, particularly if walking to a fishing spot or reeling in a catch. It’s great for mental relaxation and outdoor enjoyment."
    },
    {
        exerciseName: 'Fitball',
        time: 30,
        options: [
            { optionName: 'Fitball', calorie: 65 },
        ],
        description: "Fitball, similar to an exercise ball, focuses on core workouts that improve balance, flexibility, and coordination. It’s often used in Pilates and yoga to enhance body control and stability."
    },
    {
        exerciseName: 'Football',
        time: 30,
        options: [
            { optionName: 'Playing Catch', calorie: 54 },
            { optionName: 'Competitive', calorie: 254 },
            { optionName: 'General', calorie: 254 },
            { optionName: 'Light Effort', calorie: 109 },
        ],
        description: "Football is a high-energy team sport that combines running, passing, and tackling. It builds endurance, strength, and coordination while fostering teamwork and strategic thinking."
    },
    {
        exerciseName: 'Frisbee',
        time: 30,
        options: [
            { optionName: 'General', calorie: 72 },
            { optionName: 'Ultimate', calorie: 254 },
        ],
        description: "Frisbee is a fun, outdoor activity that improves hand-eye coordination, agility, and cardiovascular fitness. It’s often played casually or as a sport like Ultimate Frisbee."
    },
    {
        exerciseName: 'Golf',
        time: 30,
        options: [
            { optionName: 'General', calorie: 127 },
            { optionName: 'Miniature', calorie: 91 },
        ],
        description: "Golf is a precision sport that focuses on technique, balance, and concentration. It involves walking, which can cover long distances, and improves coordination and mental focus."
    },
    {
        exerciseName: 'Gymnastic',
        time: 30,
        options: [
            { optionName: 'Gymnastic', calorie: 101 },
        ],
        description: "Gymnastics involves strength, flexibility, balance, and coordination. It includes exercises on various apparatuses and builds overall body strength and agility."
    },
    {
        exerciseName: 'Handball',
        time: 30,
        options: [
            { optionName: 'General', calorie: 254 },
            { optionName: 'Competitive', calorie: 398 },
        ],
        description: "Handball is a fast-paced sport that combines running, throwing, and jumping. It enhances cardiovascular endurance, strength, and coordination."
    },
    {
        exerciseName: 'Health Club',
        time: 30,
        options: [
            { optionName: 'General', calorie: 163 },
            { optionName: 'Conditioning', calorie: 246 },
        ],
        description: "Health clubs offer various equipment and classes for fitness, including cardio, strength training, and group exercises. It's a comprehensive place to maintain overall health and fitness."
    },
    {
        exerciseName: 'Hight Ropes Course',
        time: 30,
        options: [
            { optionName: 'Hight Ropes Course', calorie: 109 },
        ],
        description: "A high ropes course is an adventurous outdoor activity that challenges balance, strength, and mental focus. It’s great for building confidence and teamwork."
    },
    {
        exerciseName: 'Hiking',
        time: 30,
        options: [
            { optionName: 'Fields', calorie: 156 },
            { optionName: 'Cross Country', calorie: 181 },
        ],
        description: "Hiking is an outdoor activity that strengthens the lower body, improves cardiovascular health, and builds endurance. It’s also a great way to enjoy nature and relax mentally."
    },
    {
        exerciseName: 'Hockey',
        time: 30,
        options: [
            { optionName: 'Ice, General', calorie: 254 },
            { optionName: 'Field', calorie: 246 },
            { optionName: 'Ice, Competitive', calorie: 326 },
        ],
        description: "Hockey, whether ice or field, is a fast-paced team sport that improves agility, endurance, and coordination. It requires both cardiovascular fitness and strong hand-eye coordination."
    },
    {
        exerciseName: 'Home Exercise',
        time: 30,
        options: [
            { optionName: 'Home Exercise', calorie: 101 },
        ],
        description: "Home exercises include a variety of workouts such as bodyweight training, yoga, or using fitness equipment at home. It provides flexibility and convenience for staying fit."
    },
    {
        exerciseName: 'Horseback Riding',
        time: 30,
        options: [
            { optionName: 'General', calorie: 163 },
            { optionName: 'Gallop', calorie: 228 },
            { optionName: 'Jumoing', calorie: 290 },
            { optionName: 'Trotting', calorie: 174 },
            { optionName: 'Walking', calorie: 101 },
        ],
        description: "Horseback riding is an activity that builds balance, coordination, and core strength. It also enhances focus and creates a strong connection between rider and horse."
    },
    {
        exerciseName: 'Jumping Jacks',
        time: 30,
        options: [
            { optionName: 'Jumping Jacks', calorie: 235 },
        ],
        description: "Jumping jacks are a full-body cardio exercise that increases heart rate and improves endurance. They are simple, effective, and can be done anywhere."
    },
    {
        exerciseName: 'Kickball',
        time: 30,
        options: [
            { optionName: 'Kickball', calorie: 217 },
        ],
        description: "Kickball is a fun, team-based game that combines elements of soccer and baseball. It’s great for improving agility, coordination, and cardiovascular fitness."
    },
    {
        exerciseName: 'Lackrose',
        time: 30,
        options: [
            { optionName: 'Lackrose', calorie: 254 },
        ],
        description: "Lacrosse is a fast-paced team sport that involves running, passing, and catching with a lacrosse stick. It improves endurance, hand-eye coordination, and agility."
    },
    {
        exerciseName: 'Lunges',
        time: 30,
        options: [
            { optionName: 'Lunges', calorie: 91 },
        ],
        description: "Lunges are a lower-body strength exercise that targets the legs and glutes. They improve balance, coordination, and muscle endurance."
    },
    {
        exerciseName: 'Martial Arts',
        time: 30,
        options: [
            { optionName: 'Practice', calorie: 156 },
            { optionName: 'Moderate Pace', calorie: 337 },
        ],
        description: "Martial arts involve a combination of combat techniques and physical conditioning. They build strength, endurance, flexibility, and mental discipline while enhancing self-defense skills."
    },
    {
        exerciseName: 'Nordic Walking with Poles',
        time: 30,
        options: [
            { optionName: '3.5 mph (5.6 km/h)', calorie: 156 },
            { optionName: '5.0 mph (8.1 km/h)', calorie: 272 },
        ],
        description: "Nordic walking is a full-body walking exercise that incorporates poles, engaging the arms and core. It enhances cardiovascular fitness and strengthens the entire body."
    },
    {
        exerciseName: 'Orienteering',
        time: 30,
        options: [
            { optionName: 'Orienteering', calorie: 290 },
        ],
        description: "Orienteering is a navigation sport that involves using a map and compass to find points in diverse terrains. It enhances problem-solving skills, physical fitness, and spatial awareness."
    },
    {
        exerciseName: 'Paddle Boarding',
        time: 30,
        options: [
            { optionName: 'Paddle Boarding', calorie: 181 },
        ],
        description: "Paddle boarding is a water activity that combines balance and strength. It improves core stability and upper body strength while providing a great way to enjoy the outdoors."
    },
    {
        exerciseName: 'Paddleball',
        time: 30,
        options: [
            { optionName: 'General', calorie: 326 },
            { optionName: 'Competitive', calorie: 181 },
        ],
        description: "Paddleball is a racquet sport that involves hitting a ball against a wall. It improves hand-eye coordination, reflexes, and cardiovascular fitness while being a fun workout."
    },
    {
        exerciseName: 'Pilates',
        time: 30,
        options: [
            { optionName: 'Intermadiate', calorie: 141 },
            { optionName: 'Advanced', calorie: 185 },
            { optionName: 'Beginner', calorie: 65 },
        ],
        description: "Pilates focuses on core strength, flexibility, and body awareness. It uses controlled movements to improve posture, balance, and overall body strength."
    },
    {
        exerciseName: 'Polo',
        time: 30,
        options: [
            { optionName: 'Polo', calorie: 141 },
        ],
        description: "Polo is a team sport played on horseback, requiring coordination, strategy, and physical fitness. It combines riding skills with teamwork and agility."
    },
    {
        exerciseName: 'Pull Ups',
        time: 30,
        options: [
            { optionName: 'Pull Ups', calorie: 101 },
        ],
        description: "Pull-ups are a strength-training exercise that primarily targets the upper body, especially the back and arms. They build muscle strength and improve overall upper body fitness."
    },
    {
        exerciseName: 'Push Ups',
        time: 30,
        options: [
            { optionName: 'Pull Ups', calorie: 101 },
        ],
        description: "Push-ups are a fundamental bodyweight exercise that strengthens the chest, shoulders, and triceps. They enhance core stability and can be modified for various fitness levels."
    },
    {
        exerciseName: 'Rackquetball',
        time: 30,
        options: [
            { optionName: 'General', calorie: 217 },
            { optionName: 'Competitive', calorie: 326 },
        ],
        description: "Racquetball is a fast-paced indoor sport that improves hand-eye coordination, agility, and cardiovascular fitness. It involves hitting a ball against a wall with a racquet."
    },
    {
        exerciseName: 'Rock Climbing',
        time: 30,
        options: [
            { optionName: 'Hight Difficult ', calorie: 174 },
            { optionName: 'Rappeling', calorie: 145 },
        ],
        description: "Rock climbing is a physically demanding activity that builds strength, endurance, and problem-solving skills. It enhances grip strength and mental focus."
    },
    {
        exerciseName: 'Rollerblading',
        time: 30,
        options: [
            { optionName: 'Hight Difficult ', calorie: 174 },
            { optionName: 'Rappeling', calorie: 145 },
        ],
        description: "Rollerblading is a fun, cardiovascular workout that improves balance, coordination, and leg strength. It can be done recreationally or as a competitive sport."
    },
    {
        exerciseName: 'Rope Jumping',
        time: 30,
        options: [
            { optionName: 'Slow', calorie: 264 },
            { optionName: 'Moderate', calorie: 391 },
            { optionName: 'Fast', calorie: 409 },
        ],
        description: "Rope jumping, or skipping, is a high-energy cardio exercise that improves coordination, agility, and cardiovascular fitness. It's a great way to burn calories quickly."
    },
    {
        exerciseName: 'Rugby',
        time: 30,
        options: [
            { optionName: 'Recreational', calorie: 192 },
            { optionName: 'Competitive', calorie: 264 },
        ],
        description: "Rugby is a contact team sport that combines running, tackling, and passing. It enhances endurance, strength, and teamwork skills while providing a high-intensity workout."
    },
    {
        exerciseName: 'Scuba Diving',
        time: 30,
        options: [
            { optionName: 'Scuba Diving', calorie: 217 },
        ],
        description: "Scuba diving is an underwater activity that explores marine environments. It requires physical fitness and provides a unique experience for relaxation and adventure."
    },
    {
        exerciseName: 'Shooting Pistol',
        time: 30,
        options: [
            { optionName: 'Shooting Pistol', calorie: 54 },
        ],
        description: "Shooting pistol involves precision and focus in target shooting. While it’s less physically demanding, it requires mental concentration and steady hands."
    },
    {
        exerciseName: 'Sit Ups',
        time: 30,
        options: [
            { optionName: 'Light Moderate', calorie: 91 },
            { optionName: 'Vigorous', calorie: 254 },
        ],
        description: "Sit-ups are a classic core exercise that strengthens abdominal muscles. They improve core stability and can be modified to increase difficulty."
    },
    {
        exerciseName: 'Skateboarding',
        time: 30,
        options: [
            { optionName: 'General', calorie: 145 },
            { optionName: 'Competitive', calorie: 181 },
        ],
        description: "Skateboarding is an action sport that enhances balance, coordination, and agility. It involves tricks and movements that improve lower body strength."
    },
    {
        exerciseName: 'Skiing',
        time: 30,
        options: [
            { optionName: 'General', calorie: 145 },
            { optionName: 'Competitive', calorie: 181 },
        ],
        description: "Skiing is a winter sport that requires balance, coordination, and strength. It provides a full-body workout while allowing for outdoor enjoyment in snowy environments."
    },
    {
        exerciseName: 'Snorkelling',
        time: 30,
        options: [
            { optionName: 'Snorkelling', calorie: 145 },
        ],
        description: "Snorkelling is a water activity that involves swimming with a mask and snorkel to observe underwater life. It enhances cardiovascular fitness and is great for relaxation."
    },
    {
        exerciseName: 'Soccer',
        time: 30,
        options: [
            { optionName: 'Casual', calorie: 217 },
            { optionName: 'Competitive', calorie: 308 },
        ],
        description: "Soccer is a globally popular team sport that involves running, kicking, and teamwork. It improves cardiovascular fitness, coordination, and strategic thinking."
    },
    {
        exerciseName: 'Squash',
        time: 30,
        options: [
            { optionName: 'Competitive', calorie: 398 },
            { optionName: 'Recreational', calorie: 228 },
        ],
        description: "Squash is a fast-paced racquet sport played in an enclosed court. It enhances agility, endurance, and hand-eye coordination while providing a vigorous workout."
    },
    {
        exerciseName: 'Squats',
        time: 30,
        options: [
            { optionName: 'Light', calorie: 91 },
            { optionName: 'Moderate', calorie: 145 },
            { optionName: 'Vigorous', calorie: 254 },
        ],
        description: "Squats are a fundamental strength exercise that targets the lower body, particularly the legs and glutes. They improve overall strength, stability, and mobility."
    },
    {
        exerciseName: 'Wrestling',
        time: 30,
        options: [
            { optionName: 'Wrestling', calorie: 181 },
        ],
        description: "Wrestling is a combat sport that requires strength, agility, and technique. It builds endurance, coordination, and mental toughness while enhancing physical fitness."
    },
    {
        exerciseName: 'Yoga',
        time: 30,
        options: [
            { optionName: 'Hatha', calorie: 47 },
            { optionName: 'Nadisodhana', calorie: 36 },
            { optionName: 'Power', calorie: 109 },
            { optionName: 'Surya Namaskar', calorie: 91 },
            { optionName: 'Bikram', calorie: 326 },
        ],
        description: "Yoga combines physical postures, breathing techniques, and meditation. It enhances flexibility, strength, and mental clarity, promoting overall well-being."
    },










]