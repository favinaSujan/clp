---
title: "Linking Methods"
date: "2019-02-24"
description:
blockquote: Our linking methods aim to make as few false matches as possible (minimize type I errors) while creating as many of the true matches as possible (minimize type II errors).
---
Linking individuals is challenging in historical data because of factors such as transcription and enumeration errors, age misreporting, mortality<sup>1</sup>, under-enumeration and international migration between census years, and many respondents with common names.
    
Figure 1 shows a comparison of different linking methods according to their type I and type II errors.

<img src="/uploads/link_methods.png" />

This figure refers to a series of linking methods currently used or soon to be added to this project (e.g., the ABE method, machine learning method, and EM method). Details of these linking methods can be found in the paper <a target="_blank" href="https://scholar.princeton.edu/sites/default/files/lboustan/files/nber_automated_linking.pdf">“Automated Linking of Historical Data”</a> by Ran Abramitzky, Leah Platt Boustan, Katherine Eriksson, James J. Feigenbaum, and Santiago Pérez. 
    
A set of codes and documentation that can be used to implement each of these methods can be downloaded from our data page or found at <a target="_blank" href="https://ranabr.people.stanford.edu/matching-codes">this website</a>.

<hr class="my-2"><p class="footnote"><sup>1</sup> Missed links due to mortality will be a larger problem when linking between two Censuses conducted a number of years apart (i.e. matching from the 1850 Census to 1940 Census) and so links created over a long time span should be used with caution.</p>       