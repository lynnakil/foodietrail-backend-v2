// controllers/homeController.js
exports.getFeaturedDish = async (req, res) => {
    res.json({
        title: "Today's Featured Dish",
        description: "Lebanese mezza platter: hummus, tabbouleh, kibbeh.",
        image: "/images/lebanese.jpg"
    });
};
