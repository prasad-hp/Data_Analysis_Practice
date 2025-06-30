# 🎯 Ad Click Prediction using Logistic Regression

A machine learning project that predicts user click behavior on online advertisements using logistic regression, achieving **96.7% accuracy** with comprehensive data analysis and visualization.

## 🚀 Project Overview

This project analyzes user behavior patterns to predict whether internet users will click on advertisements based on their demographic and behavioral characteristics. The model provides actionable insights for digital marketing optimization.

## 📊 Key Results

- **Model Accuracy**: 96.7%
- **Precision**: 97% 
- **Recall**: 96%
- **F1-Score**: 0.97
- **Dataset**: 1,000 user records with 10 features
- **Key Finding**: Gender is the strongest predictor (coefficient: -0.76) - females 2.1x more likely to click ads

## 🛠️ Tech Stack

![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat&logo=pandas&logoColor=white)
![Scikit-learn](https://img.shields.io/badge/Scikit--learn-F7931E?style=flat&logo=scikit-learn&logoColor=white)
![Matplotlib](https://img.shields.io/badge/Matplotlib-11557c?style=flat&logo=python&logoColor=white)
![Seaborn](https://img.shields.io/badge/Seaborn-3776AB?style=flat&logo=python&logoColor=white)
![Jupyter](https://img.shields.io/badge/Jupyter-F37626?style=flat&logo=jupyter&logoColor=white)

## 📋 Dataset Features

| Feature | Description | Type |
|---------|-------------|------|
| Daily Time Spent on Site | User session duration (minutes) | Float |
| Age | User age in years | Integer |
| Area Income | Average income of user's location | Float |
| Daily Internet Usage | Daily internet time (minutes) | Float |
| Male | Gender indicator (1=Male, 0=Female) | Binary |
| Clicked on Ad | Target variable (1=Clicked, 0=Not Clicked) | Binary |

## 🔍 Key Insights

### Feature Importance (Coefficient Analysis)
1. **Gender (Male)**: -0.76 ⭐ *Strongest predictor*
2. **Daily Time on Site**: -0.19
3. **Age**: +0.18
4. **Daily Internet Usage**: -0.07
5. **Area Income**: ~0.00

### Business Recommendations
- **Target female demographics** for higher conversion rates
- **Focus on moderate engagement users** (inverse time correlation)
- **Implement age-progressive strategies** (positive age correlation)

## 📈 Model Performance

```
Confusion Matrix:
                Predicted
Actual    0    1
    0   142    4    (97.3% precision)
    1     6  148    (96.1% recall)

Classification Report:
              precision  recall  f1-score  support
         0       0.96    0.97      0.97      146
         1       0.97    0.96      0.97      154
  accuracy                        0.97      300
```

## 🚀 Getting Started

### Prerequisites
```bash
pip install pandas numpy scikit-learn matplotlib seaborn jupyter
```

### Installation & Usage
```bash
# Clone the repository
git clone https://github.com/yourusername/ad-click-prediction.git
cd ad-click-prediction

# Install dependencies
pip install -r requirements.txt

# Launch Jupyter Notebook
jupyter notebook Ad_Click_Prediction.ipynb
```

## 📂 Project Structure

```
ad-click-prediction/
│
├── Ad_Click_Prediction.ipynb    # Main analysis notebook
├── advertising.csv              # Dataset
├── requirements.txt             # Dependencies
├── README.md                   # Project documentation
└── images/                     # Visualization outputs
    ├── confusion_matrix.png
    ├── feature_importance.png
    └── eda_plots.png
```

## 📊 Visualizations

The project includes comprehensive EDA with:
- Age distribution histograms
- Income vs Age correlation analysis
- KDE plots for engagement patterns
- Pair plots with target variable separation
- Feature importance bar charts
- Confusion matrix heatmaps

## 🎯 Learning Outcomes

This project demonstrates:
- **Binary Classification** with logistic regression
- **Exploratory Data Analysis** with statistical visualizations
- **Feature Engineering** and selection techniques
- **Model Evaluation** with multiple metrics
- **Business Intelligence** from statistical insights

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


## 📞 Contact

**Prasad Hp** - itsprasadhp@gmail.com

Project Link: [https://github.com/prasad-hp/advertisement](https://github.com/prasad-hp/advertisement)

---
⭐ **Star this repo if you found it helpful!**